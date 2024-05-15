
import { useCart } from '../hooks/useCart';
import '../styles/products.css'
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons";

export function Products ({ products }) {
    const { addToCart, cart } = useCart();

    const checkProductInCart = product => {
        return cart.some(item => item.id === product.id);
    }

    return (
        <main className="products">
            <ul>
                {products.slice(0, 10).map(product => {
                    const isProductInCart = checkProductInCart(product);
                    return (
                        <li key={product.id}>
                            <img 
                                src={product.thumbnail} 
                                alt={product.description}
                            />
                            <div>
                                <strong>{product.title}</strong> - ${product.price}
                            </div>
                            <div>
                                <button onClick={() => isProductInCart 
                                    ? RemoveFromCartIcon(product)
                                    : addToCart(product)}>
                                    {
                                        isProductInCart
                                            ? <RemoveFromCartIcon />
                                            : <AddToCartIcon />
                                    }
                                </button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}