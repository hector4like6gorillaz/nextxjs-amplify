let storageKey: string | null = null
let storageKeyPromise: Promise<string> | null = null

export const getStorageEncryptionKey = async (): Promise<string> => {
  if (storageKey) {
    return storageKey
  }

  if (storageKeyPromise) {
    return storageKeyPromise
  }

  storageKeyPromise = fetch('/internal/storage', {
    method: 'GET',
    credentials: 'same-origin',
    cache: 'no-store',
  })
    .then(async (response) => {
      if (!response.ok) {
        throw new Error(
          `No se pudo obtener la configuración de storage: ${response.status}`,
        )
      }

      const data: { key?: string } = await response.json()

      if (!data.key) {
        throw new Error('La configuración de storage no contiene una clave')
      }

      storageKey = data.key

      return storageKey
    })
    .finally(() => {
      storageKeyPromise = null
    })

  return storageKeyPromise
}
