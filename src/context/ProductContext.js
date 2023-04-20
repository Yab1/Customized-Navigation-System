import { createContext, useState } from "react";
import useFetch from "../hooks/useFetch";

export const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
  const [productInfo, setProductInfo] = useState({
    products: [],
  });

  const productUrl = "https://fakestoreapi.com/products";
  const { data } = useFetch(productUrl);
  console.log(data);
  // setProductInfo((prevProductInfo) => {
  //   prevProductInfo.products = [...prevProductInfo.products, data];
  // });
  return (
    <ProductContext.Provider value={productInfo}>
      {children}
    </ProductContext.Provider>
  );
}
