import react, { createContext, useContext, useState } from "react"

const ctx = createContext()

const initialContext = {
    user: {
        name: "Matheus Ferreira",
        slug: "matheus.ferreirasantos.94"
    }
}

export function StoreProvider({children}) {
    const [store, setStore] = useState(initialContext)

    return (
        <ctx.Provider value={[store, setStore]}>
            {children}
        </ctx.Provider>
    )
}

export function useStore() {
    const [store, setStore] = useContext(ctx)
    return [store, setStore]
}