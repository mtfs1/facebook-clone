import react from "react"

import { Link } from "react-router-dom"
import { useStore } from "./../../../store"

import style from "./style.css"

function LeftMenu() {
    const [store, setStore] = useStore()

    const user = store.user

    return (
        <aside id="initial-page-left-menu">
            <Link to={`/${user.slug}`}><img src={user.imageLink} className="profile-image" />{user.name}</Link>
            <Link to="/pages"><img src="/img/flag.svg" className="icon"/>Paginas</Link>
            <Link to="/friends"><img src="/img/social.svg" className="icon"/>Amigos</Link>
            <Link to="/groups/feed"><img src="/img/social-2.svg" className="icon"/>Grupos</Link>
        </aside>
    )
}

export default LeftMenu