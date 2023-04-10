import Header from "./components/Header";
import AppRouter from "./Router/AppRouter";
import { useEffect } from "react";
import { MyContext } from "./context/MyContext";

import { useState } from "react";

import "./App.css";

function App() {
    const [pizzas, setPizzas] = useState([]);

    const getPizzas = async () => {
        const res = await fetch("../src/data/pizzas.json");
        let data = await res.json();

        setPizzas(data);
        };

    useEffect(() => {
        getPizzas();
    }, []);
  

    return (
        <>
            <MyContext.Provider value={{pizzas, setPizzas}}>
                <Header />
                <AppRouter />
            </MyContext.Provider>
        </>
    );
}

export default App;
