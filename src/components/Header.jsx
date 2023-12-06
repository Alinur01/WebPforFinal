import React from "react";
import logo from "../media/img/logo.png";
import contacts from "../media/icons/contact-number.svg";
import basket from "../media/icons/basket.svg";
import arrow from "../media/icons/arrow.svg";
import { links } from "../constants/road";
import {NavLink} from "react-router-dom";


const Header = () => {
    return (
        <header>
            <div className="logo">{/* Логотип сайта */}
                <img src={logo} alt="Логотип сайта" className="logo-img" />
            </div>
            <div className="menu">{/* Панель навигации */}
                <ul>
                    {links.map((item) => (
                        <li className="home" key={item.id}>
                            <a href={item.link}>{item.name}</a>
                        </li>
                    ))}
                     <NavLink to="/CartWithSelectedItem"><img src={basket} alt="корзина с выбранным товаром" className="basket"/></NavLink>
                </ul>
            </div>
        </header>
    );
};


export default Header;