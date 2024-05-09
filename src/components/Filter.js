import { useState, useId } from 'react';
import '../styles/filter.css';

export function Filter({ onChange }) {
    const [minPrice, setMinPrice] = useState(0)
    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice = (event) => {
        setMinPrice(event.target.value)
        onChange(prevState => ({
            ...prevState, 
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        onChange(prevState => ({
            ...prevState, 
            category: event.target.value
        }))
    }

    return (
        <section className="filters">
            <div>
                <label htmlFor={minPriceFilterId}>Precio Minimo</label>
                <input 
                    type="range" 
                    id={minPriceFilterId}
                    min="0"
                    max="3000"
                    onChange={handleChangeMinPrice}
                />
                <span>${minPrice}</span>
            </div>
            <div>
                <label htmlFor={categoryFilterId}>Categoria</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value="all">Todo</option>
                    <option value="home-decoration">Decoracion hogar</option>
                    <option value="laptops">Notebooks</option>
                    <option value="smartphones">Celular</option>
                    <option value="fragrances">Perfumes</option>
                    <option value="skincare">Cuidados para la piel</option>
                    <option value="groceries">Comestibles</option>
                </select>
            </div>
        </section>
    )
}