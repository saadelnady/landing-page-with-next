// categoriesReducer.js

import { SET_CATEGORIES } from "../actions";

const initialState = {
  list: [],
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};

export default categoriesReducer;
