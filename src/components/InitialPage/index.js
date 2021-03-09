import react from "react"

import "./style.css"

import LeftMenu from "./LeftMenu"
import Main from "./Main"
import RightMenu from "./RightMenu"

function InitialPage() {
    return (
        <div className="main-container">
            <LeftMenu />
            <Main />
            <RightMenu />
        </div>
    )
}

export default InitialPage