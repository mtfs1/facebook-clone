import react, { createContext, useContext } from "react"

const ctx = createContext()

export function StoreProvider({children}) {
    return (
        <ctx.Provider value={{}}>
            {children}
        </ctx.Provider>
    )
}

export function useStore() {
    return useContext(ctx)
}