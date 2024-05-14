import { useState } from 'react';
import { Products } from './components/Products'; // Importa el componente Products desde su ubicación correcta
import productsData from './mocks/products.json'; 
import { Headers } from './components/Header';
import { useFilters } from './hooks/useFilters';
import { Cart } from './components/Cart';


function App() {
  const [products] = useState(productsData.products || []);
  const { filterProducts } = useFilters(products);
  const filteredProducts = filterProducts(products);

  return (
    <>
      <Headers />
      <Cart />
      <Products products={filteredProducts} />
    </>
  );
}

export default App;
