export const formatTo12Hour = (isoDate: Date, day: boolean = false): string => {
  const date = new Date(isoDate)

  const time = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  })

  if (!day) return time

  const formattedDate = `${date.getDate().toString().padStart(2, "0")}/${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}/${date.getFullYear()}`

  return `${formattedDate} ${time}`
}

export function getTimeNow() {
  return new Date().toISOString()
}

export function formatNumber(value: number | string) {
  const num = Number(value)
  if (isNaN(num)) return value
  return num.toLocaleString("en-US")
}

export const getTodayShortDate = (): string => {
  const today = new Date()

  const months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"]

  const month = months[today.getMonth()]
  const day = today.getDate()

  return `${month} ${day}`
}

export function obtenerMesEnEspanol(fecha: string): string {
  const date = new Date(fecha)
  return new Intl.DateTimeFormat("es-ES", { month: "long" }).format(date)
}
