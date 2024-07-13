import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { wrapper } from "../../../store"; // Adjust path as per your file structure
import { fetchCategories, fetchProducts } from "../../../store/actions"; // Adjust path as per your file structure
import ProductCard from "./ProductCard";
import Loading from "@/sharedComponents/Loading/Loading";

const HomePage = ({ categoriesData }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.list);
  const products = useSelector((state) => state.products.list);
  const loading = useSelector((state) => state.products.loading);
  const [activeCategory, setActiveCategory] = useState("");

  useEffect(() => {
    if (!categories.length) {
      dispatch(fetchCategories());
    }
    if (!products.length) {
      dispatch(fetchProducts());
    }
  }, [dispatch, categories.length, products.length]);

  const handleFetchProducts = (category) => {
    setActiveCategory(category);
    dispatch(fetchProducts(category));
  };

  return (
    <div className="container py-3 min-vh-100">
      <button
        className={`me-3 py-2 px-4 rounded ${
          activeCategory === "" ? "bg-danger text-white" : "bg-gray-200"
        }`}
        onClick={() => handleFetchProducts("")}
      >
        All
      </button>
      {categories?.map((category, index) => (
        <button
          key={index}
          className={`me-3 py-2 px-4 rounded ${
            activeCategory === category ? "bg-danger text-white" : "bg-gray-200"
          }`}
          onClick={() => handleFetchProducts(category)}
        >
          {category}
        </button>
      ))}

      <h1 className="text-center my-4">Products</h1>

      {loading ? (
        <Loading />
      ) : (
        <ul className="d-flex justify-content-between align-items-center flex-wrap">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      )}
    </div>
  );
};

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  try {
    await store.dispatch(fetchCategories());
    await store.dispatch(fetchProducts());
    const categoriesData = store.getState().categories.list;
    return { props: { categoriesData } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { categoriesData: [] } };
  }
});

export default HomePage;
