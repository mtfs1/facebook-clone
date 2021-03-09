import React from "react"

import "./style.css"

function Button({src}) {
    return (
        <div className="settings-button">
            <img src={src} />
        </div>
    )
}

export default Button