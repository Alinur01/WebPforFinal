import React from "react";
import empty from "../../media/icons/empty-box.svg";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {NavLink} from "react-router-dom";

const CartWithoutGoods = () => {
    return (
        <>
            <Header/>
            <section className="empty-basket-department">  {/*Пустая карзина*/}
                <img src={empty} alt="Пустая карзинка" className="empty-box"/>
                <h2>Ваша корзина пуста</h2>
                <p>Самое время добавить в нее что-нибудь</p>
               <NavLink to="/"><button className="btn-basket">Перейти в каталог</button></NavLink>
            </section>
            <Footer/>
        </>
    )
}

export default CartWithoutGoods;