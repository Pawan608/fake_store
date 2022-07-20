import { useState, useEffect, useCallback } from "react";

export const useFetch = (url, setLoadingscript, status = false) => {
  const [loading, setLoading] = useState(true);

  const [products, setProducts] = useState([]);
  console.log("use fetch");
  const getProducts = useCallback(async () => {
    const response = await fetch(url);
    const products = await response.json();
    setProducts(products);
    setLoading(false);
    if (status) {
      setLoadingscript((loadingScript) => {
        return loadingScript == null || false ? true : false;
      });
    }
  }, [url]);

  useEffect(() => {
    getProducts();
  }, [url, getProducts]);
  return { loading, products };
};
