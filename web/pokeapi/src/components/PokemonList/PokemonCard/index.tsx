import { PokemonGenericResponse } from "@/@types/pokemonApiResponse";
import { useFetchPokemonDetails } from "@/hooks/useFetchPokemonDetails";
import { useEffect } from "react";
import * as S from "./styles";
import { PokemonTypeIcon } from "@/components/PokemonTypeIcon";
import { Loading } from "@/components/Loading";
import { useHighlightPokemon } from "@/hooks/useHighlightPokemon";

interface Props {
  pokemon: PokemonGenericResponse;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const {
    loading,
    response: pokemonDetails,
    fetchData,
  } = useFetchPokemonDetails({
    url: pokemon.url,
  });

  const { handleHighlight } = useHighlightPokemon();

  useEffect(() => {
    fetchData();
  }, []);

  const handleSelectedPokemon = () => {
    if (loading) return;
    pokemonDetails && handleHighlight(pokemonDetails);
  };

  return (
    <S.Container onClick={handleSelectedPokemon}>
      {loading ? (
        <S.LoadingContainer>
          <S.Name>
            {pokemon.name} {"\n"}Info...
          </S.Name>
          <Loading size={80} />
        </S.LoadingContainer>
      ) : (
        <>
          <S.Image
            src={pokemonDetails?.sprites.front_default}
            alt={`Image of ${pokemon.name}`}
          />

          <S.ContainerInfo>
            <S.WrapperDetails>
              <S.Name>{pokemon.name}</S.Name>
              <S.Details>
                Base Exp: <strong>{pokemonDetails?.base_experience}</strong>
              </S.Details>
              <S.Details>
                Weight: <strong>{pokemonDetails?.weight}</strong>
              </S.Details>
              <S.WrapperType>
                {pokemonDetails?.types.map((type) => (
                  <PokemonTypeIcon
                    key={type?.type?.name}
                    type={type?.type?.name}
                  />
                ))}
              </S.WrapperType>
            </S.WrapperDetails>
          </S.ContainerInfo>
        </>
      )}
    </S.Container>
  );
};
