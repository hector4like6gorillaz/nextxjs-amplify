export const capitalFirstLetter = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)

/**
 * Normaliza un texto eliminando acentos, tildes, diéresis y convirtiendo a minúsculas.
 */
export const normalizeText = (text: string): string => {
  return text
    .normalize("NFD") // descompone los caracteres acentuados
    .replace(/[\u0300-\u036f]/g, "") // elimina las marcas diacríticas
    .toLowerCase() // homologa a minúsculas
}

export function obtenerIniciales(nombreCompleto: string): string {
  return nombreCompleto
    .trim()
    .split(/\s+/)
    .map((palabra) => palabra[0].toUpperCase())
    .join("")
}
