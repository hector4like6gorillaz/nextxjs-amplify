import { useEffect, useMemo, useState } from "react";
import useDebounce from "~/shared/hooks/useDebounce";
import { notifyToast } from "~/shared/utils/toast.utils";
import { usePokemonQuery } from "../api/pokemon.querys";
import type { IPokemon } from "../interfaces/pokemon.interfaces";

const usePokemon = (): PokemonReturn => {
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce({ inputValue: search, delay: 1000 });

  const { data, isFetching, isError, isSuccess, refetch } =
    usePokemonQuery(debouncedSearch);

  useEffect(() => {
    if (isFetching) return;

    if (isError) {
      console.error(`Error loading Pokémon: ${debouncedSearch}`);
      notifyToast(`Couldn't find "${debouncedSearch}"`, "error");
      return;
    }

    if (isSuccess && data) {
      notifyToast(`${data.name} loaded successfully`, "success");
    }
  }, [isFetching, isError, isSuccess, data, debouncedSearch]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleClearSearch = () => {
    setSearch("");
  };

  return useMemo(
    () => ({
      data: isSuccess ? data : null,
      isLoading: isFetching,
      isError,

      search,

      handlers: {
        handleSearchChange,
        handleClearSearch,
        handleRefetch: refetch,
      },
    }),
    [data, isFetching, isError, isSuccess, search, refetch],
  );
};

export default usePokemon;

export interface PokemonReturn {
  data: IPokemon | null;
  isLoading: boolean;
  isError: boolean;
  search: string;

  handlers: {
    handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleClearSearch: () => void;
    handleRefetch: () => void;
  };
}
