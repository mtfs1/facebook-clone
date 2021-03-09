import './App.css'

import { StoreProvider } from "./store"
import { BrowserRouter, Route } from "react-router-dom"

import Header from "./components/header"

import InitialPage from "./components/InitialPage"

function App() {
  return (
    <StoreProvider>
      <Header />
      <BrowserRouter>
        <Route exact path="/">
          <InitialPage />
        </Route>
      </BrowserRouter>
    </StoreProvider>
  )
}

export default App;
