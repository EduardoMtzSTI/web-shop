import { createContext, useState } from "react";

export const FiltersContexts = createContext();

export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    category: "All",
    minPrice: 0,
  });
  const [categories, setCategories] = useState([]);

  return (
    <FiltersContexts.Provider
      value={{ filters, setFilters, categories, setCategories }}
    >
      {children}
    </FiltersContexts.Provider>
  );
}
