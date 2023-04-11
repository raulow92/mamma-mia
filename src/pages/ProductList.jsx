import { useContext } from "react";
import { MyContext } from "../context/MyContext";

const ProductList = () => {
    const chile = new Intl.NumberFormat("es-CL");
    const { pizzas, setPizzas } = useContext(MyContext);
    const { allProducts, setAllProducts } = useContext(MyContext);
    const { countProducts, setCountProducts } = useContext(MyContext);
    const { total, setTotal } = useContext(MyContext);

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
    console.log(allProducts);
    console.log(total);


    return (
        <div className="product-list-container">
            <div className="product-list">
                {pizzas.map((pizza) => (
                    <div className="product-card" id={pizza.id} key={pizza.id}>
                        <div className="img-container">
                            <img src={pizza.img} alt={pizza.name} />
                        </div>
                        <h2>
                            {pizza.name.charAt(0).toUpperCase() +
                                pizza.name.slice(1)}
                        </h2>
                        <p>{pizza.ingredients.join(", ")}</p>
                        <button onClick={() => onAddProduct(pizza)}>
                            Agregar ${chile.format(pizza.price)}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
