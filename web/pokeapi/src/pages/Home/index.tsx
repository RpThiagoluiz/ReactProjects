import { useEffect } from "react";
import { Loading } from "@/components/Loading";
import { useFetchData } from "@/hooks/useFetchData";
import { baseUrl } from "@/services/urls";
import * as S from "./styles";
import { PokemonHighlight } from "@/components/PokemonHighlight";
import { PokemonList } from "@/components/PokemonList";
import { HighlightPokemonProvider } from "@/context/highlightPokemon";

export const Home = () => {
  const { loading, response, fetchData } = useFetchData({
    url: baseUrl.pokeApi,
  });

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <HighlightPokemonProvider>
      <S.Wrapper>
        {loading && <Loading />}
        {response !== null && !loading && (
          <div>
            <PokemonList pokemons={response.results} />
          </div>
        )}
        <PokemonHighlight />
      </S.Wrapper>
    </HighlightPokemonProvider>
  );
};
