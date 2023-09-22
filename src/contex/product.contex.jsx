import { createContext, useEffect, useState } from "react";
import SHOP_DATA from ".././shop-data.js";
import {
  addProductsCollection,
  getCategoriesAndDocuments,
} from "../utils/firebase/firebase.utils.js";

export const ProductsContex = createContext({
  products: [],
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // to add a changed data in db uncomment this useeffect and the all new data add in the firebase firestore
  // useEffect(() => {
  //   addProductsCollection("categories", SHOP_DATA);
  // }, []);

  useEffect(() => {
    const getcategoryMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
    };
    getcategoryMap();
  }, []);

  const value = { products };
  return (
    <ProductsContex.Provider value={value}>{children}</ProductsContex.Provider>
  );
};
