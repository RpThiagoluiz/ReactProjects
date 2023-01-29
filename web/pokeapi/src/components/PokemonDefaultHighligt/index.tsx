import { useFetchPokemonDetails } from "@/hooks/useFetchPokemonDetails";
import { baseUrl } from "@/services/urls";
import { Loading } from "../Loading";
import * as S from "./styles";

export const PokemonDefaultHighlight = () => {
  const {
    loading,
    response: picachuDetails,
    fetchData,
  } = useFetchPokemonDetails({
    url: baseUrl.pikachuDetails,
  });

  return (
    <>
      {loading ? (
        <Loading size={80} />
      ) : (
        <S.Container>
          <h2>THIAGO</h2>
        </S.Container>
      )}
    </>
  );
};
