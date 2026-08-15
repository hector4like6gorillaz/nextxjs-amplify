import { SERVICE } from '~/shared/http/axios'
import type { IPokemon } from '../interfaces/pokemon.interfaces'

export const getPokemon = async (name: string): Promise<IPokemon> => {
  const { data } = await SERVICE.get<IPokemon>(`/pokemon/${name}`)
  return data
}
