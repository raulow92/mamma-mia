import Header from "./components/Header";
import AppRouter from "./Router/AppRouter";
import { useEffect } from "react";
import { MyContext } from "./context/MyContext";
import { useState } from "react";
import "./App.css";

function App() {
    const [pizzas, setPizzas] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [countProducts, setCountProducts] = useState(0);

    const getPizzas = async () => {
        const res = await fetch("/src/data/pizzas.json");
        let data = await res.json();
        setPizzas(data);
    };

    useEffect(() => {
        getPizzas();
    }, []);

    return (
        <>
            <MyContext.Provider
                value={{
                    pizzas,
                    setPizzas,
                    allProducts,
                    setAllProducts,
                    total,
                    setTotal,
                    countProducts,
                    setCountProducts,
                }}
            >
                <Header />
                <AppRouter />
            </MyContext.Provider>
        </>
    );
}

export default App;
