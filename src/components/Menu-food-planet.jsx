import React from "react";

const MenuFoodPlanet = () => {
    return (
        <section> {/*Меню food-planet*/}
            <div className="novelties">
                <h2>Меню</h2>
                <ul className="food-navigation">
                    <li><a href="#">Пицца</a></li>
                    <li><a href="#">Бургер</a></li>
                    <li><a href="#">Суши</a></li>
                    <li><a href="#">Роллы</a></li>
                    <li><a href="#">Салаты</a></li>
                    <li><a href="#">Десерты</a></li>
                    <li><a href="#">Напитки</a></li>
                </ul>
            </div>
            <div className="flex-end">
                    <p className="sort">Сортировать по:</p>
                <select className="option">
                    <option value="">По умолчанию</option>
                    <option value="">Гей</option>
                    <option value="">лол</option>
                </select>
            </div>
        </section>
    )
}

export default MenuFoodPlanet;