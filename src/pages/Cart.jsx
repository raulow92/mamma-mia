import { useContext } from "react";
import { MyContext } from "../context/MyContext";

const Cart = () => {
    const chile = new Intl.NumberFormat("es-CL");
    const { pizzas } = useContext(MyContext);
    const { allProducts, setAllProducts } = useContext(MyContext);
    const { countProducts, setCountProducts } = useContext(MyContext);
    const { total, setTotal } = useContext(MyContext);

    const onAddProduct = (pizza) => {
        if (allProducts.find((item) => item.id == pizza.id)) {
            const products = allProducts.map((item) =>
                item.id === pizza.id ? { ...item, qty: item.qty + 1 } : item
            );
            setCountProducts(countProducts + 1);
            setTotal(total + pizza.price);
            return setAllProducts([...products]);
        }
    };

    const onSubsProduct = (pizza) => {
        if (pizza.qty == 1) {
            onDeleteProduct(pizza)
            return
        }

        if (allProducts.find((item) => item.id == pizza.id)) {
            const products = allProducts.map((item) =>
                item.id === pizza.id ? { ...item, qty: item.qty - 1 } : item
            );
            setCountProducts(countProducts - 1);
            setTotal(total - pizza.price);
            return setAllProducts([...products]);
        }
    };

    const onDeleteProduct = (pizza) => {
        const results = allProducts.filter(
            item => item.id !== pizza.id
        )

        setTotal(total - pizza.price * pizza.qty)
        setCountProducts(countProducts - pizza.qty)
        setAllProducts(results);
    }

    const onDeleteCart = () => {
        setAllProducts([])
        setCountProducts(0)
        setTotal(0)
    }

    return (
        countProducts ?
        <div className="cart-container">
            <div className="cart">
                <div className="cart-l">
                    {allProducts.map((pizza) => (
                        <div className="cart-card" id={pizza.id} key={pizza.id}>
                            <div className="card-l">
                                <div className="img-cart">
                                    <img src={pizza.img} alt={pizza.name} />
                                </div>
                                <div className="title-total">
                                    <h2>
                                        {pizza.name.charAt(0).toUpperCase() +
                                            pizza.name.slice(1)}
                                    </h2>
                                    <p>${chile.format(pizza.price)}</p>
                                </div>
                            </div>
                            <div className="card-r">
                                <i onClick={() => onSubsProduct(pizza)} className="fa-solid fa-minus"></i>
                                <p className="each-qty">{pizza.qty}</p>
                                <i onClick={() => onAddProduct(pizza)} className="fa-solid fa-plus"></i>
                                <p className="subtotal">${chile.format(pizza.price * pizza.qty)}</p>
                                <i onClick={() => onDeleteProduct(pizza)} className="fa-solid fa-trash"></i>
                            </div>
                        </div>
                    ))}
                    <button className="delete-cart" onClick={() => onDeleteCart()}>Vaciar Carrito</button>
                </div>
                <div className="cart-r">
                    <h2>Resumen</h2>
                    <div className="cant">
                        <p>Cantidad:</p>
                        <p className="cant-p">{countProducts} pizzas</p>    
                    </div>
                    <div className="total">
                        <p>Total:</p>
                        <p className="total-p">${chile.format(total)}</p>
                    </div>
                    <button className="pay">Pagar</button>
                </div>
            </div>
        </div> : 

        <div className="cart-container">
            <div className="empty">
                <p>Carrito vacío</p>
            </div>
        </div>
    )
};

export default Cart;
