import React from "react";
import BurgerMenu from "../burger-menu";
import firstCheeseburger from "../pages/img/first-cheeseburger.png";
import secondCheeseburger from "../pages/img/second-cheeseburger.png";
import thirdCheeseburger from "../pages/img/third-cheeseburger.png";
import fourthCheeseburger from "../pages/img/fourth-cheeseburger.png";


const cheeseburger = [
    {
        img: [firstCheeseburger]
    },
    {
        img: [secondCheeseburger]
    },
    {
        img: [thirdCheeseburger]
    },
    {
        img: [fourthCheeseburger]
    },
]

const ContentCheeseburger = () => {
    return (
        <>
            <div className="flex">
                <BurgerMenu
                    img={cheeseburger[0].img}
                />
                <BurgerMenu
                    img={cheeseburger[1].img}
                />
                <BurgerMenu
                    img={cheeseburger[2].img}
                />
                <BurgerMenu
                    img={cheeseburger[3].img}
                />
            </div>
        </>
    )
}

export default ContentCheeseburger;