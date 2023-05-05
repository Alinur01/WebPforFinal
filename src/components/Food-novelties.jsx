import React from "react";


const FoodNovelties = () => {
    return (
        <section> {/*Новинки в меню*/}
            <div className="novelties">
                <h2>Новинки</h2>
                <div className="food-navigation-bar">
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
            </div>
        </section>
    )
}
export default FoodNovelties;