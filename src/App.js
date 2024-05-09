import { useState } from 'react';
import { Products } from './components/Products'; // Importa el componente Products desde su ubicación correcta
import productsData from './mocks/products.json'; 
import { Headers } from './components/Header';

function App() {
  const [products] = useState(productsData.products || []);
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  });

  // Utiliza useState para inicializar los productos con los datos importados

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

  const filteredProducts = filterProducts();

  return (
    <>
      <Headers changeFilters={setFilters}/>
      <Products products={filteredProducts} />
    </>
  );
}

export default App;
