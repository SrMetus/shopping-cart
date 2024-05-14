import { useId } from 'react';
import '../styles/filter.css';
import { useFilters } from '../hooks/useFilters';

export function Filter() {
    const { filters, setFilters } = useFilters();
    
    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice = (event) => {
        setFilters(prevState => ({
            ...prevState, 
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
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
                    value={filters.minPrice}
                />
                <span>${filters.minPrice}</span>
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