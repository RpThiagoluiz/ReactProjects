import { type PokemonDetailsResponse } from "@/@types/pokemonApiResponse";
import axios from "axios";
import { useState } from "react";

interface Props {
  url: string;
}

export const useFetchPokemonDetails = ({ url }: Props) => {
  const [response, setResponse] = useState<PokemonDetailsResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const result = await axios.get(url);
      setResponse(result?.data);
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  };

  return {
    fetchData,
    loading,
    response,
  };
};
