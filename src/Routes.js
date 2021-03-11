import { BrowserRouter, Route } from "react-router-dom"

import InitialPage from "./components/InitialPage"

function AppRoutes() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={InitialPage} />
        </BrowserRouter>
    )
}

export default AppRoutes