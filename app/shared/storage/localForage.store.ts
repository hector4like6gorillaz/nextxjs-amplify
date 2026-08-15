import localforage from 'localforage'
import CryptoJS from 'crypto-js'
import { getStorageEncryptionKey } from './storage-config.service'

/* ============================================================
 * 🔐 SECRET DE ENCRIPTACIÓNaja
 * ============================================================ */

let finalSecret: string | null = null

let secretPromise: Promise<string> | null = null

const getSecret = async (): Promise<string> => {
  if (finalSecret) {
    return finalSecret
  }

  if (secretPromise) {
    return secretPromise
  }

  secretPromise = getStorageEncryptionKey()
    .then((key) => {
      if (!key) {
        throw new Error('[localForage] STORAGE_ENCRYPTION_KEY no disponible')
      }

      finalSecret = key

      return key
    })
    .catch((error) => {
      secretPromise = null

      throw error
    })

  return secretPromise
}

/* ============================================================
 * 💾 CACHÉ DE INSTANCIAS
 * ============================================================ */

const storeInstances: Record<string, LocalForage> = {}

/* ============================================================
 * 🧱 CREAR O REUTILIZAR INSTANCIAS
 * ============================================================ */

const getOrCreateStore = (storeName: string): LocalForage => {
  if (storeInstances[storeName]) {
    return storeInstances[storeName]
  }

  const instance = localforage.createInstance({
    name: 'Callcenter-aib2c-db',
    storeName,
  })

  storeInstances[storeName] = instance

  return instance
}

/* ============================================================
 * 🔒 ENCRIPTACIÓN
 * ============================================================ */

const encrypt = async (value: any): Promise<string> => {
  const secret = await getSecret()

  const stringValue = JSON.stringify(value)

  return CryptoJS.AES.encrypt(stringValue, secret).toString()
}

/* ============================================================
 * 🔓 DESENCRIPTACIÓN
 * ============================================================ */

const decrypt = async (encrypted: string): Promise<any> => {
  const secret = await getSecret()

  const bytes = CryptoJS.AES.decrypt(encrypted, secret)

  const decrypted = bytes.toString(CryptoJS.enc.Utf8)

  if (!decrypted) {
    throw new Error(
      '[localForage] No se pudo desencriptar el valor. ' +
        'La clave puede ser incorrecta o el valor puede estar corrupto.',
    )
  }

  return JSON.parse(decrypted)
}

/* ============================================================
 * 💾 SET ITEM
 * ============================================================ */

export const setItemForage = async ({
  store,
  key,
  value,
  useEncryption = true,
}: {
  store: string | LocalForage
  key: string
  value: any
  useEncryption?: boolean
}): Promise<void> => {
  try {
    const instance = typeof store === 'string' ? getOrCreateStore(store) : store

    const toSave = useEncryption ? await encrypt(value) : JSON.stringify(value)

    await instance.setItem(key, toSave)
  } catch (error) {
    console.error(`[setItem] Error guardando ${key}`, error)

    throw error
  }
}

/* ============================================================
 * 📦 GET ITEM
 * ============================================================
 *
 * Si no se proporciona key:
 *   → devuelve todo el contenido del store.
 * ============================================================ */

export const getItemForage = async ({
  store,
  key,
  useEncryption = true,
}: {
  store: string | LocalForage
  key?: string
  useEncryption?: boolean
}): Promise<any | null> => {
  try {
    const instance = typeof store === 'string' ? getOrCreateStore(store) : store

    /* --------------------------------------------------------
     * Obtener TODO el store
     * -------------------------------------------------------- */

    if (!key) {
      const all: Record<string, any> = {}

      await instance.iterate(async (value, k) => {
        try {
          all[k] = useEncryption
            ? await decrypt(value as string)
            : JSON.parse(value as string)
        } catch (err) {
          console.error(`[getItem] Error parseando ${k}`, err)
        }
      })

      return all
    }

    /* --------------------------------------------------------
     * Obtener un elemento específico
     * -------------------------------------------------------- */

    const data = await instance.getItem<string>(key)

    if (!data) {
      return null
    }

    return useEncryption ? await decrypt(data) : JSON.parse(data)
  } catch (error) {
    console.error(
      `[getItem] Error obteniendo ${key ?? 'store completo'}`,
      error,
    )

    throw error
  }
}

/* ============================================================
 * ❌ REMOVE ITEM
 * ============================================================ */

export const removeItemForage = async ({
  store,
  key,
}: {
  store: string | LocalForage
  key: string
}): Promise<void> => {
  try {
    const instance = typeof store === 'string' ? getOrCreateStore(store) : store

    await instance.removeItem(key)
  } catch (error) {
    console.error(`[removeItem] Error eliminando ${key}`, error)

    throw error
  }
}

/* ============================================================
 * 🧹 CLEAR STORE
 * ============================================================ */

export const clearStoreForage = async (
  store: string | LocalForage,
): Promise<void> => {
  try {
    const instance = typeof store === 'string' ? getOrCreateStore(store) : store

    await instance.clear()
  } catch (error) {
    console.error('[clearStore] Error limpiando la instancia', error)

    throw error
  }
}

/* ============================================================
 * 🧾 OBTENER TODOS LOS VALORES COMO ARRAY
 * ============================================================ */

export const getArrItems = async ({
  store,
  useEncryption = true,
}: {
  store: string | LocalForage
  useEncryption?: boolean
}): Promise<any[]> => {
  const arr: any[] = []

  try {
    const instance = typeof store === 'string' ? getOrCreateStore(store) : store

    await instance.iterate(async (value, key) => {
      try {
        const item = useEncryption
          ? await decrypt(value as string)
          : JSON.parse(value as string)

        arr.push(item)
      } catch (error) {
        console.warn(`[getArrItems] Error al procesar ${key}`, error)
      }
    })
  } catch (error) {
    console.error('[getArrItems] Error recorriendo la instancia', error)

    throw error
  }

  return arr
}
