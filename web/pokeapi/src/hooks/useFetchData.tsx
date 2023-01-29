import { type PokemonsResponse } from "@/@types/pokemonApiResponse";
import axios from "axios";
import { useState } from "react";

interface Props {
  url: string;
}

export const useFetchData = ({ url }: Props) => {
  const [response, setResponse] = useState<PokemonsResponse | null>(null);
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
      }, 500);
    }
  };

  return {
    fetchData,
    loading,
    response,
  };
};
