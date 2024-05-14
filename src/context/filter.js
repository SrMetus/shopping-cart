import { createContext, useState } from "react"; 

// crear el contexto y el lo que se debe consumir 
export const FiltersContext = createContext();

// crear el provider, para proveer el contexto
export function FilterProvider ({ children }) {
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0
    })

    return (
        <FiltersContext.Provider value={{
            filters,
            setFilters
        }}>
            {children}
        </FiltersContext.Provider>
    )
}