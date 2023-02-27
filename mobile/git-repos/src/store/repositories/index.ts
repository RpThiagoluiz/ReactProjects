import { createSlice } from "@reduxjs/toolkit";
import { type PayloadAction } from "@reduxjs/toolkit";
import { type RepositoriesResponse } from "interfaces/repositories";

export interface RepositoriesState {
  data: RepositoriesResponse | null;
  isLoading: boolean;
  currentPage: number;
}

export interface FetchRepositoriesParams {
  page: number;
  queryParams: string;
}

const initialState: RepositoriesState = {
  data: null,
  isLoading: false,
  currentPage: 1,
};

export const repositoriesSlice = createSlice({
  name: "repositories",
  initialState,
  reducers: {
    fetchRepositories: (
      state,
      action: PayloadAction<FetchRepositoriesParams>
    ) => {
      state.isLoading = true;
      action.payload;
    },
    fetchRepositoriesSuccess: (
      state,
      action: PayloadAction<Pick<RepositoriesState, "data" | "currentPage">>
    ) => {
      state.isLoading = false;
      state.data = action.payload.data;
      state.currentPage = action.payload.currentPage;
    },
    fetchRepositoriesFail: (state) => {
      state.data = null;
      state.isLoading = false;
      state.currentPage = 1;
    },
    fetchRepositoriesClear: () => {
      initialState;
    },
  },
});

export const {
  fetchRepositories,
  fetchRepositoriesSuccess,
  fetchRepositoriesFail,
  fetchRepositoriesClear,
} = repositoriesSlice.actions;

export default repositoriesSlice.reducer;
