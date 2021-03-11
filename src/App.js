import './App.css'

import { StoreProvider } from "./store"

import Routes from "./Routes"

function App() {
  return (
    <StoreProvider>
      <Routes />
    </StoreProvider>
  )
}

export default App;
