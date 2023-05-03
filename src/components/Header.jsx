import React from "react";
import logo from "./pages/img/logo.png";
import contacts from "./pages/icons/contact-number.svg";
import basket from "./pages/icons/basket.svg";
import arrow from "./pages/icons/arrow.svg";


const Header = () => {
    return(
        <header>
            <div classname="logo">{/*Логотип сайта*/}
                <img src={logo} alt="Логотип сайта" className="logo-img"/>
            </div>
            <div className="menu">{/*панель навигации*/}
                <ul>
                    <li><a href="#" className="home">Главная</a></li>
                    <li><a href="#">Меню<img src={arrow} className="arrow"/></a></li>
                    <li><a href="#">Доставка</a></li>
                    <li><a href="#">Контакты</a></li>
                    <li><img src={contacts} alt="Контактный номер" className="contact-number"/><a href="#">+996500405988</a></li>
                    <li><img src={basket} alt="корзина с выбранным товаром" className="basket"/></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;