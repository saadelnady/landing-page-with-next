import { all } from "redux-saga/effects";
import { watchFetchCategories } from "./categoriesSaga";
import { watchFetchProducts } from "./productsSaga";

export default function* rootSaga() {
  yield all([watchFetchCategories(), watchFetchProducts()]);
}
