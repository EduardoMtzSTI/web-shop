import { useId } from "react";
import { FiltersContexts } from "../contexts/FiltersContexts";
import { useContext } from "react";

export function Filters() {
  const minPriceFilterId = useId();
  const categoryFilterId = useId();
  const { setFilters, filters, categories } = useContext(FiltersContexts);

  const handleRange = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleCategory = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  return (
    <>
      <section className="filters">
        <div className="filter-range ">
          <label htmlFor={minPriceFilterId}>Precio minimo: </label>
          <div>
            <input
              id={minPriceFilterId}
              type="range"
              min="0"
              max="2000"
              onChange={handleRange}
              value={filters.minPrice}
            />
            <label>$ {filters.minPrice}</label>
          </div>
        </div>
        <div>
          <label>Category: </label>

          <select
            id={categoryFilterId}
            onChange={handleCategory}
            value={filters.category}
          >
            <option>All</option>
            {categories?.map((category, index) => (
              <option key={index}>{category}</option>
            ))}
          </select>
        </div>
      </section>
    </>
  );
}
