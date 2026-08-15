export const scrolldiv = (id: string) => {
  const elem = document.getElementById(id)
  elem?.scrollIntoView({ behavior: 'smooth' })
}
