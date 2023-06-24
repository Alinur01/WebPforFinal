import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { NavLink } from "react-router-dom";
import close from "../../media/icons/iks.png"

const CartWithSelectedItem = () => {
    const [cartData, setCartData] = useState(
        JSON.parse(localStorage.getItem("products") || "[]")
    );

    const totalPrice = cartData.reduce(
        (total, item) => total + item.count * item.price,
        0
    );

    const removeItem = (index) => {
        const updatedCart = [...cartData];
        updatedCart.splice(index, 1);
        setCartData(updatedCart);
        localStorage.setItem("products", JSON.stringify(updatedCart));
    };

    return (
        <>
            <Header />
            <section className="basket-with-selected-products">
                <h2>Корзина</h2>
                <p>Товары в вашей корзине</p>
                <div className="d-flex">
                    <p>Продукт</p>
                    <div></div>
                    <p>Количество</p>
                    <p>Комментарий</p>
                    <p>Цена</p>
                    <p>К оплате</p>
                </div>
                {cartData.map((item, index) => {
                    const totalPriceItem = item.count * item.price;
                    return (
                        <div className="d-flex-basket" key={index}>
                            <p>
                                <img src={item.img} className="cheeseburger-bascet" alt="" />
                            </p>
                            <p>
                                <h4>
                                    <b>{item.name}</b>
                                </h4>
                            </p>
                            <p className="count">
                                <b>{item.count}</b>
                            </p>
                            <input type="text" />
                            <p className="price-basket">
                                <b>{item.price} сом</b>
                            </p>
                            <p className="totalPrice">
                                <b>{totalPriceItem} сом</b>
                            </p>
                            <img
                                src={close}
                                alt=""
                                className="close"
                                onClick={() => removeItem(index)}
                            />
                        </div>
                    );
                })}
                <div className="total">
                    <h2>Итого:</h2>
                    <p className="total-price">{totalPrice} сом</p>
                </div>
            </section>
            <div className="continue-order">
                <a href="src/pages/basket/Cart-with-selected-item#">Продолжить покупки</a>
                <NavLink to="/GoodsOrder">
                    <button className="btn-checkout">Оформить заказ</button>
                </NavLink>
            </div>
            <hr />
            <hr className="hr3" />
            <Footer />
        </>
    );
};

export default CartWithSelectedItem;
