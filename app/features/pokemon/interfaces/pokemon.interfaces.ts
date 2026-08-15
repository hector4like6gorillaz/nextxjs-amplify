export interface IPokemonType {
  slot: number
  type: {
    name: string
  }
}

export interface IPokemonSprites {
  front_default: string | null
}

export interface IPokemon {
  id: number
  name: string
  height: number
  weight: number
  sprites: IPokemonSprites
  types: IPokemonType[]
}
