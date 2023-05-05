import React from "react";
import Header from "./components/Header";
import MainBlock from "./components/Main-block";
import FoodNovelties from "./components/Food-novelties";
import ContentCheeseburger from "./components/content/content-cheeseburger";
const App = () => {
    return (
        <>
            <div className="container">
                <Header/>
                <MainBlock/>
                <FoodNovelties/>
                <ContentCheeseburger/>
            </div>
        </>
    )
}


export default App;