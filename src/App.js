import products from './mocks/products.json';
import { Products } from "./components/Products.js";
import { useState } from 'react';


function App() {
  //const [product] = useState(products);
  const [filters, setFilters] = useState({
    category: 'all',
    minprice: 0
  });

  const filterProducts = (products) => {
    return products.filter(product => {
      return product.price >= product.minprice &&
      (
        filters.category === 'all' ||
        product.category === filters.category
      )
    })
  }

  return (
    <Products products={products} />
  );
}

export default App;
