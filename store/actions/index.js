export const FETCH_CATEGORIES = "FETCH_CATEGORIES";
export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_PRODUCTS = "SET_PRODUCTS";

export const fetchCategories = () => ({
  type: FETCH_CATEGORIES,
});

export const fetchProducts = (category = "") => ({
  type: FETCH_PRODUCTS,
  payload: category,
});

export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  payload: categories,
});

export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products,
});
