import { useContext } from "react";
import { FiltersContext } from "../context/filter";

export function useFilters(products) {
    const { filters, setFilters } = useContext(FiltersContext)
    const filterProducts = () => {
      return products.filter(product => {
        return (
          product.price >= filters.minPrice &&
          (
            filters.category === 'all' ||
            product.category === filters.category
          )
        );
      });
    };
    return { filterProducts, setFilters }
  }