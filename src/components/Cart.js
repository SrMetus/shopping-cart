import { useId } from "react";
import { AddToCartIcon, RemoveFromCartIcon, ClearCartIcon, CartIcon } from "./Icons";
import "../styles/cart.css"

export function Cart () {
    const cartCheckboxId = useId()
    return (
        <>
            <label className="cart-button" htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input type="checkbox" id={cartCheckboxId} hidden />
            <aside className="cart">
                <ul>
                    <li>
                        <img
                            src="https://i.dummyjson.com/data/products/30/thumbnail.jpg"
                            alt="Key Holder"
                        />
                        <div>
                            <strong>Key Holder</strong> - $30
                        </div>

                        <footer>
                            <small>
                                Qty: 1
                            </small>
                        </footer>
                        <button>+</button>
                    </li>
                </ul>

                <button>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    )
}