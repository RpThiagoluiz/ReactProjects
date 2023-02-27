import { type RootState } from "@store/index";

export const getRepositories = (state: RootState) => state.repositories;

export const getLastRepositoriesItems = (state: RootState) =>
  state.repositories.data?.items;
