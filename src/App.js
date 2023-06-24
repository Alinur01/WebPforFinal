import React from "react";
import Header from "./components/Header";
import MainBlock from "./pages/main-block/Main-block";
import FoodNovelties from "./components/Food-novelties";
import ContentCheeseburger from "./content/content-cheeseburger";
import MenuFoodPlanet from "./components/Menu-food-planet";
import ContentPizza from "./content/content-pizza";
import ContentWhyChooseUs from "./content/content-why-choose-us";
import ContentReviews from "./content/content-reviews";
import Footer from "./components/Footer";
import CartWithoutGoods from "./pages/basket/Cart-without-goods";
import CartWithSelectedItem from "./pages/basket/Cart-with-selected-item";
import GoodsOrder from "./pages/basket/Goods-order";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <>
                    <div className="container">
                        <Header />
                        <MainBlock />
                        <FoodNovelties />
                        <ContentCheeseburger />
                        <MenuFoodPlanet />
                        <ContentPizza />
                        <ContentWhyChooseUs />
                        <ContentReviews />
                    </div>
                    <Footer />
                </>
            )
        },
        {
            path: "/CartWithoutGoods",
            element: <CartWithoutGoods/>
        },
        {
            path: "/CartWithSelectedItem",
            element: <CartWithSelectedItem/>
        },
        {
            path: "/GoodsOrder",
            element: <GoodsOrder/>
        },
    ]);

    return <RouterProvider router={router} />;
};

export default App;