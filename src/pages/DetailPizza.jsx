import { useContext } from "react"
import { useParams } from "react-router-dom";
import { MyContext } from "../context/MyContext";

const DetailPizza = () => {
    const { allProducts, setAllProducts } = useContext(MyContext);
    const { countProducts, setCountProducts } = useContext(MyContext);
    const { total, setTotal } = useContext(MyContext);
    const { pizzas } = useContext(MyContext);
    const { id } = useParams();
    const i = pizzas.findIndex(x => x.id === id)
    const name = pizzas[i].name
    const chile = new Intl.NumberFormat("es-CL");

    const onAddProduct = (pizza) => {
        if (allProducts.find((item) => item.id == pizza.id)) {
            const products = allProducts.map((item) =>
                item.id === pizza.id ? { ...item, qty: item.qty + 1 } : item
            );
            setTotal(total + pizza.price * pizza.qty)
            setCountProducts(countProducts + pizza.qty)
            return setAllProducts([...products])
        }
        
        setTotal(total + pizza.price * pizza.qty)
        setCountProducts(countProducts + pizza.qty)
        setAllProducts([...allProducts, pizza]);
    };

    return (
        <>
            <div className="detail-container">
                <div className="detail">
                    <div className="detail-l">
                        <h2>{name.charAt(0).toUpperCase() +
                                name.slice(1)}</h2>
                        <p><span>Ingredientes: </span>{pizzas[i].ingredients.join(", ")}</p>
                        <p>{pizzas[i].desc}</p>
                        <div className="buy">
                            <button onClick={() => onAddProduct(pizzas[i])} className="add-detail">Agregar</button>
                            <h3>${chile.format(pizzas[i].price)}</h3>
                        </div>
                    </div>
                    <div className="detail-r">
                        <div className="detail-img">
                            <img src={pizzas[i].img} alt={name} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailPizza