import { createContext } from "react"; 

// crear el contexto
export const FiltersContext = createContext();

// crear el provider, para proveer el contexto
export function FilterProvider ({ children }) {
    return (
        <FiltersContext.Provider value={{
            category: 'all',
            minPrice: 0
        }}>
            {children}
        </FiltersContext.Provider>
    )
}