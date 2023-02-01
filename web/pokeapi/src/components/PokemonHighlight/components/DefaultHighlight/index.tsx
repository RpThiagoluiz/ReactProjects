import { useFetchPokemonDetails } from "@/hooks/useFetchPokemonDetails";
import { baseUrl } from "@/services/urls";
import { useEffect } from "react";
import { Loading } from "../../../Loading";
import * as S from "./styles";

export const DefaultHighlight = () => {
  const {
    loading,
    response: pikachuDetails,
    fetchData,
  } = useFetchPokemonDetails({
    url: baseUrl.pikachuDetails,
  });

  useEffect(() => {
    console.log(pikachuDetails);
  }, [pikachuDetails]);

  useEffect(() => {
    !pikachuDetails && fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <S.LoadingContainer>
          <Loading size={80} />
        </S.LoadingContainer>
      ) : (
        <S.Container>
          <S.ContainerPokemonInfo>
            <S.PokemonName>{pikachuDetails?.name}</S.PokemonName>
          </S.ContainerPokemonInfo>
          <S.ContainerPokemonImage>
            <S.ContainerPokemonImage>
              <S.Image
                src={
                  pikachuDetails?.sprites.front_shiny ??
                  pikachuDetails?.sprites.front_default
                }
                alt={`Image of ${pikachuDetails?.name}`}
              />
            </S.ContainerPokemonImage>
          </S.ContainerPokemonImage>
        </S.Container>
      )}
    </>
  );
};
