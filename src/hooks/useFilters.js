import { useContext, useEffect } from "react";
import { FiltersContexts } from "../contexts/FiltersContexts";

export function useFilters({ products }) {
  const { filters, setFilters, setCategories } = useContext(FiltersContexts);

  useEffect(() => {
    setCategories([...new Set(products.map((product) => product.category))]);
  }, []);

  const filterProducts = (products) => {
    return products?.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "All" || filters.category === product.category)
      );
    });
  };

  return { filters, setFilters, filterProducts };
}
