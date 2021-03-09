import react from "react"

import "./style.css"

import Icon from "./facebook-icon"
import TButton from "./toolbar-button"
import SButton from "./settings-button"

import { useStore } from "./../../store"

function Header() {
    const [store, setStore] = useStore()

    const user = store.user.name

    return (
        <header id="main-header">
            <div id="home-search">
                <Icon />
                <label>
                    <input type="text" placeholder="Pesquisar no Facebook" />
                </label>
            </div>
            <div id="toolbar">
                <TButton src="/img/home.svg"/>
                <TButton src="/img/tv.svg"/>
                <TButton src="/img/market.svg"/>
                <TButton src="/img/network.svg"/>
                <TButton src="/img/games.svg"/>
            </div>
            <div id="settings">
                <div id="user">
                    <img src="/img/user.svg"/>
                    <span>{user.split(" ")[0]}</span>
                </div>
                <SButton src="/img/plus.svg"/>
                <SButton src="/img/chat.svg"/>
                <SButton src="/img/bell.svg"/>
                <SButton src="/img/dropdown.svg"/>
            </div>
        </header>
    )
}

export default Header