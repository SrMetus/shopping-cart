import { useState } from 'react';
import { Products } from './components/Products'; // Importa el componente Products desde su ubicación correcta
import productsData from './mocks/products.json'; 
import { Headers } from './components/Header';

function useFilters(products) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  });

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

function App() {
  const [products] = useState(productsData.products || []);
  const { filterProducts, setFilters } = useFilters(products);
  const filteredProducts = filterProducts(products);

  return (
    <>
      <Headers changeFilters={setFilters}/>
      <Products products={filteredProducts} />
    </>
  );
}

export default App;
