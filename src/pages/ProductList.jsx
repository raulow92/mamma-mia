import { useContext } from "react";
import { MyContext } from "../context/MyContext";

const ProductList = () => {
    const { pizzas, setPizzas } = useContext(MyContext);
    const chile = new Intl.NumberFormat("es-CL");

    return (
        <div className="product-list-container">
            <div className="product-list">
                {pizzas.map((pizza) => (
                    <div className="product-card" id={pizza.id} key={pizza.id}>
                            <div className="img-container">
                                <img src={pizza.img} alt={pizza.name} />
                            </div>
                            <h2>{pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1)}</h2>
                            <p>{pizza.ingredients.join(", ")}</p>
                            <button>
                                Agregar ${chile.format(pizza.price)}
                            </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
