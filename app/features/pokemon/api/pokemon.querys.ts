import type { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";

import type { IPokemon } from "../interfaces/pokemon.interfaces";
import { getPokemon } from "./pokemon.service";
import { CustomError } from "@/interfaces/errors.interface";

export const usePokemonQuery = (name: string) => {
  return useQuery<IPokemon, AxiosError<CustomError>>({
    queryKey: ["pokemon", name],
    queryFn: () => getPokemon(name),
    enabled: Boolean(name.trim()),
    retry: false,
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000,
  });
};
