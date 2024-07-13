import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import { HYDRATE, createWrapper } from "next-redux-wrapper";

// Reducers
import categoriesReducer from "./reducers/categoriesReducer";
import productsReducer from "./reducers/productsReducer";

// Combine reducers
const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
});

// Root reducer handling hydration
const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  } else {
    return rootReducer(state, action);
  }
};

// Create Saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create store function
const makeStore = () => {
  // Redux DevTools setup
  const composeEnhancers =
    typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose;

  const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

// Create wrapper
export const wrapper = createWrapper(makeStore);
