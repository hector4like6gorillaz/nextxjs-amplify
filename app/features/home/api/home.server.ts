export async function getPokemons() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10')

  if (!res.ok) {
    throw new Error('Error fetching pokemon')
  }

  return res.json()
}
