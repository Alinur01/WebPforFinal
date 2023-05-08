import React from "react";
import Header from "./components/Header";
import MainBlock from "./components/Main-block";
import FoodNovelties from "./components/Food-novelties";
import ContentCheeseburger from "./components/content/content-cheeseburger";
import MenuFoodPlanet from "./components/Menu-food-planet";
import ContentPizza from "./components/content/content-pizza";
import ContentWhyChooseUs from "./components/content/content-why-choose-us";
import ContentReviews from "./components/content/content-reviews";
const App = () => {
    return (
        <>
            <div className="container">
                <Header/>
                <MainBlock/>
                <FoodNovelties/>
                <ContentCheeseburger/>
                <MenuFoodPlanet/>
                <ContentPizza/>
                <ContentWhyChooseUs/>
                <ContentReviews/>
            </div>
        </>
    )
}


export default App;