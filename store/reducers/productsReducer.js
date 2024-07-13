// reducers/productsReducer.js

const initialState = {
  list: [],
  loading: false,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_PRODUCTS_SUCCESS":
      return {
        ...state,
        list: action.payload,
        loading: false,
      };
    case "FETCH_PRODUCTS_FAILURE":
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default productsReducer;
