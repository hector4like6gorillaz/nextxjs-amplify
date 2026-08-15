"use client";

import usePokemon from "../hooks/usePokemon";

const PokemonModule = () => {
  const {
    data,
    isLoading,
    isError,
    search,
    handlers: { handleSearchChange, handleClearSearch, handleRefetch },
  } = usePokemon();

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Pokémon Explorer</h1>

          <p className="mt-2 text-gray-600">
            Search for a Pokémon and inspect its information.
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-sm">
          <label
            htmlFor="pokemon-search"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Pokémon name
          </label>

          <div className="flex gap-2">
            <input
              id="pokemon-search"
              type="text"
              value={search}
              onChange={handleSearchChange}
              placeholder="e.g. pikachu"
              autoComplete="off"
              className="flex-1 rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-gray-500 focus:ring-2 focus:ring-gray-200"
            />

            {search && (
              <button
                type="button"
                onClick={handleClearSearch}
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        <div className="mt-6">
          {!search && (
            <div className="rounded-xl border border-dashed border-gray-300 bg-white p-8 text-center">
              <p className="text-gray-500">
                Enter a Pokémon name to start searching.
              </p>
            </div>
          )}

          {isLoading && (
            <div className="rounded-xl bg-white p-8 text-center shadow-sm">
              <p className="text-gray-600">Loading Pokémon...</p>
            </div>
          )}

          {isError && !isLoading && (
            <div className="rounded-xl border border-red-200 bg-white p-8 text-center shadow-sm">
              <h2 className="font-semibold text-red-700">Pokémon not found</h2>

              <p className="mt-2 text-sm text-gray-500">
                We couldn't find "{search}".
              </p>

              <button
                type="button"
                onClick={handleRefetch}
                className="mt-4 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-700"
              >
                Retry
              </button>
            </div>
          )}

          {data && !isLoading && !isError && (
            <article className="overflow-hidden rounded-xl bg-white shadow-sm">
              <div className="flex flex-col items-center p-8">
                {data.sprites.front_default && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={data.sprites.front_default}
                    alt={data.name}
                    width={180}
                    height={180}
                    className="mb-4"
                  />
                )}

                <h2 className="text-2xl font-bold capitalize text-gray-900">
                  {data.name}
                </h2>

                <div className="mt-6 grid w-full grid-cols-3 gap-4">
                  <div className="rounded-lg bg-gray-50 p-4 text-center">
                    <p className="text-xs font-medium uppercase text-gray-500">
                      Height
                    </p>
                    <p className="mt-1 text-lg font-semibold text-gray-900">
                      {data.height}
                    </p>
                  </div>

                  <div className="rounded-lg bg-gray-50 p-4 text-center">
                    <p className="text-xs font-medium uppercase text-gray-500">
                      Weight
                    </p>
                    <p className="mt-1 text-lg font-semibold text-gray-900">
                      {data.weight}
                    </p>
                  </div>

                  <div className="rounded-lg bg-gray-50 p-4 text-center">
                    <p className="text-xs font-medium uppercase text-gray-500">
                      Types
                    </p>
                    <p className="mt-1 text-sm font-semibold capitalize text-gray-900">
                      {data.types.map((type) => type.type.name).join(", ")}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleRefetch}
                  className="mt-6 rounded-lg border border-gray-300 px-5 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
                >
                  Refetch
                </button>
              </div>
            </article>
          )}
        </div>
      </div>
    </main>
  );
};

export default PokemonModule;
