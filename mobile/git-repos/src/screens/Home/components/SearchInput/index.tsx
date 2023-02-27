import { RootState } from "@store/index";
import {
  fetchRepositories,
  fetchRepositoriesClear,
  FetchRepositoriesParams,
} from "@store/repositories";
import { getRepositories } from "@store/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "styled-components";
import { Container, SearchIcon, TextInput } from "./styles";

interface Props {
  searchRepositoryName: string;
  handleOnChangeSearchRepositoryName: (value: string) => void;
}

export function SearchInput({
  searchRepositoryName,
  handleOnChangeSearchRepositoryName,
}: Props) {
  const theme = useTheme();
  const inputColor = theme.COLORS.FONT_LIGHT;

  const dispatch = useDispatch();

  const { isLoading, data } = useSelector((state: RootState) =>
    getRepositories(state)
  );

  const handleFetchRepositories = () => {
    if (!searchRepositoryName.trim().length) return;

    if (data) {
      dispatch(fetchRepositoriesClear());
    }

    const payload: FetchRepositoriesParams = {
      queryParams: searchRepositoryName,
      page: 1,
    };

    dispatch(fetchRepositories(payload));
  };

  return (
    <Container disabled={isLoading}>
      <TextInput
        autoFocus
        value={searchRepositoryName}
        onChangeText={handleOnChangeSearchRepositoryName}
        onBlur={handleFetchRepositories}
        placeholder={"Busca por repositórios"}
        placeholderTextColor={inputColor}
        editable={!isLoading}
      />
      <SearchIcon color={inputColor} />
    </Container>
  );
}
