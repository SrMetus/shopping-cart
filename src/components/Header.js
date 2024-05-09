import { Filter } from "./Filter";


export function Headers({ changeFilters }) {
    return (
        <header>
            <h1>Shopping Cart</h1>
            <Filter onChange={changeFilters}/>
        </header>
    )
}