import React from "react";
import TypesOfPizza from "../Types-of-pizza";
import firstPizza from "../pages/img/first-pizza.png";
import secondPizza from "../pages/img/second-pizza.png";
import thirdPizza from "../pages/img/third-pizza.png";
import fourthPizza from "../pages/img/fourth-pizza.png";
import fifthЗizza from "../pages/img/fifth-pizza.png";
import sixthPizza from "../pages/img/sixth-pizza.png";


const pizza = [
    {
        img: [firstPizza]
    },
    {
        img: [secondPizza]
    },
    {
        img: [thirdPizza]
    },
    {
        img: [fourthPizza]
    },
    {
        img: [sixthPizza]
    },
]

const ContentPizza = () => {
    return (
        <>
            <div className="flex-pizza">
                <TypesOfPizza
                    img={firstPizza}
                />
                <TypesOfPizza
                    img={secondPizza}
                />
                <TypesOfPizza
                    img={thirdPizza}
                />
                <TypesOfPizza
                    img={fourthPizza}
                />
            </div>
            <div className="flex-pizza">
                <TypesOfPizza
                    img={secondPizza}
                />
                <TypesOfPizza
                    img={fifthЗizza}
                />
                <TypesOfPizza
                    img={thirdPizza}
                />
                <TypesOfPizza
                    img={sixthPizza}
                />
            </div>
            <div className="flex-center">
                <button>Показать еще</button>
            </div>
        </>
    )
}

export default ContentPizza