import { apiGateway } from "@services";
import {
  fetchRepositoriesFail,
  FetchRepositoriesParams,
  fetchRepositoriesSuccess,
} from "@store/repositories";
import { type Repository } from "interfaces/repositories";
import { call, put, select, takeEvery } from "redux-saga/effects";
import { urls } from "services/urls";
import { AxiosResponse } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";
import { getLastRepositoriesItems } from "@store/selectors";

function* workFetchRepositories(
  action: PayloadAction<FetchRepositoriesParams>
) {
  try {
    const response: AxiosResponse = yield call(
      apiGateway.get,
      `${urls.repositories}`,
      {
        params: {
          q: action.payload.queryParams,
          page: action.payload.page,
        },
      }
    );

    const lastRepositoriesData: Repository[] = yield select(
      getLastRepositoriesItems
    );

    const newItems = () => {
      if (!lastRepositoriesData) {
        return response.data.items;
      }

      const newArray: Repository[] = Array.from(
        new Set(lastRepositoriesData.concat(response.data.items))
      );

      return newArray;
    };

    yield put(
      fetchRepositoriesSuccess({
        data: {
          ...response.data,

          items: action.payload.page === 1 ? response.data.items : newItems(),
        },
        currentPage: action.payload.page,
      })
    );
  } catch (err) {
    console.log(err);
    yield put(fetchRepositoriesFail());
  }
}

function* repositoriesSagas() {
  yield takeEvery("repositories/fetchRepositories", workFetchRepositories);
}

export default repositoriesSagas;
