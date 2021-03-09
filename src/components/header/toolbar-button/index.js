import react from "react"

import "./style.css"

function Button({src}) {
    return (
        <div className="toolbar-button">
            <img src={src} />
        </div>
    )
}

export default Button