import react from "react"

import { Link } from "react-router-dom"
import { useStore } from "./../../../store"

import style from "./style.css"

function LeftMenu() {
    const [store, setStore] = useStore()

    const user = store.user

    return (
        <aside id="initial-page-left-menu">
            <Link to={`/${user.slug}`}>{user.name}</Link>
            <Link to="/pages">Paginas</Link>
            <Link to="/friends">Amigos</Link>
            <Link to="/groups/feed">Grupos</Link>
        </aside>
    )
}

export default LeftMenu