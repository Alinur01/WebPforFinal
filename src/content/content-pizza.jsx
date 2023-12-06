import React from "react";
import TypesOfPizza from "../components/Types-of-pizza";


const ContentPizza = () => {
    return (
        <>
            <div className="flex-pizza">
                <TypesOfPizza/>
            </div>
            <div className="flex-pizza">
                <TypesOfPizza/>
            </div>
            <div className="flex-center">
                <button>Показать еще</button>
            </div>
        </>
    )
}

export default ContentPizza;