import React from "react";
import logoFooter from "./pages/icons/logo-footer.svg"
import contacts from "./pages/icons/contact-number-footer.svg";

const Footer = () => {
    return(
    <footer>
        <img src={logoFooter} alt="Логотип сайта"/>
        <div className="menu">{/*панель навигации*/}
            <ul>
                <li><a href="#" className="home">Главная</a></li>
                <li><a href="#">Меню</a></li>
                <li><a href="#">Доставка</a></li>
                <li><a href="#">Контакты</a></li>
                <li><img src={contacts} alt="контактный номер" className="contact-number-footer"/><a href="#">+996500405988</a></li>
            </ul>
        </div>
    </footer>
    )
}

export default Footer;