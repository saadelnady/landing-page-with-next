// sagas/productsSaga.js

import { call, put, takeLatest } from "redux-saga/effects";

function* fetchProducts(action) {
  try {
    yield put({ type: "FETCH_PRODUCTS_REQUEST" });
    const url = action.payload
      ? `https://fakestoreapi.com/products/category/${action.payload}`
      : "https://fakestoreapi.com/products";
    const response = yield call(fetch, url);
    const data = yield response.json();
    yield put({ type: "FETCH_PRODUCTS_SUCCESS", payload: data });
  } catch (error) {
    yield put({ type: "FETCH_PRODUCTS_FAILURE", error });
    console.error(error);
  }
}

export function* watchFetchProducts() {
  yield takeLatest("FETCH_PRODUCTS", fetchProducts);
}
