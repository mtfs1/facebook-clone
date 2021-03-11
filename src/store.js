import react, { createContext, useContext, useState } from "react"

const ctx = createContext()

const initialContext = {
    user: {
        name: "Matheus Ferreira",
        slug: "matheus.ferreirasantos.94",
        imageLink: "https://scontent.fsjk2-1.fna.fbcdn.net/v/t1.0-9/83582428_1510185492464157_1520822321508515840_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeGYuF3vYurpyrT6BiF3NncUmcHl9jeYTNeZweX2N5hM15uoWF8fR-b_rwnbT5UR14pRH43NWsjqUqAmhYlsz2tr&_nc_ohc=mUopsOsQlZQAX8seyb8&_nc_ht=scontent.fsjk2-1.fna&oh=a1fca3ef742863d9ce06a5aff11218e1&oe=606E3CA7"
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