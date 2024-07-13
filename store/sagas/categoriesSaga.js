import { call, put, takeLatest } from "redux-saga/effects";

import { FETCH_CATEGORIES, setCategories } from "../actions";

function* fetchCategoriesSaga() {
  try {
    const response = yield call(
      fetch,
      "https://fakestoreapi.com/products/categories"
    );
    const data = yield response.json();
    yield put(setCategories(data));
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
}

export function* watchFetchCategories() {
  yield takeLatest(FETCH_CATEGORIES, fetchCategoriesSaga);
}
