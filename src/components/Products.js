import { AddToCartIcon } from "./Icons";


export function Products ({ products }) {
    console.log(products.products);
    return (
        <main className="products">
            <ul>
                {products.products.map(product => (
                    <li key={product.id}>
                        <img 
                            src={product.thumbnail} 
                            alt={product.description}
                        />
                        <div>
                            <strong>{product.title}</strong> - ${product.price}
                        </div>
                        <div>
                            <button>
                                <AddToCartIcon />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    )
}