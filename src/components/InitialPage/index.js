import react from "react"

import "./style.css"

import Header from "./../header"
import LeftMenu from "./LeftMenu"
import Main from "./Main"
import RightMenu from "./RightMenu"

function InitialPage() {
    return (
        <>
            <Header />
            <div className="main-container">
                <LeftMenu />
                <Main />
                <RightMenu />
            </div>
        </>
    )
}

export default InitialPage