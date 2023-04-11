import { Route, Routes } from "react-router-dom";
import ProductList from "../pages/ProductList";
import DetailPizza from "../pages/DetailPizza"
import Cart from "../pages/Cart"

const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/:id" element={<DetailPizza />} />
            </Routes>
        </>
    )
}

export default AppRouter