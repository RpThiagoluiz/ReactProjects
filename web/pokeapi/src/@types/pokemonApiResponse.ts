export type PokemonGenericResponse = {
  name: string;
  url: string;
};

type PokemonType = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

export type PokemonsResponse = {
  count: number;
  next: string;
  previous: null;
  results: PokemonGenericResponse[];
};

export type PokemonDetailsResponse = {
  base_experience: number;
  id: number;
  types: PokemonType[];
  weight: number;
  name: string;
  sprites: {
    back_default?: string;
    back_female?: string;
    back_shiny?: string;
    front_default?: string;
    front_shiny?: string;
  };
};
