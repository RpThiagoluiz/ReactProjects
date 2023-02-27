import { RootState } from "@store/index";
import {
  fetchRepositories,
  FetchRepositoriesParams,
} from "@store/repositories";
import { getRepositories } from "@store/selectors";
import { useDispatch, useSelector } from "react-redux";

export const useFetchNextPage = () => {
  const { currentPage } = useSelector((state: RootState) =>
    getRepositories(state)
  );

  const dispatch = useDispatch();

  const fetchNextPage = (searchRepositoryName: string) => {
    const payload: FetchRepositoriesParams = {
      queryParams: searchRepositoryName,
      page: currentPage + 1,
    };

    console.log(payload);

    dispatch(fetchRepositories(payload));
  };

  return {
    fetchNextPage,
  };
};
