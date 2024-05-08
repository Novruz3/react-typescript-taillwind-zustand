import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Main } from "./components/Main"
import { Navbar } from "./components/Navbar"
import { Product } from "./components/Product"
import { Cart } from "./components/Cart"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
