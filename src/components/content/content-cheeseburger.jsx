import React from "react";
import TypesOfCheeseburgers from "../Types-of-cheeseburgers";
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
            <div className="flex-cheeseburger">
                <TypesOfCheeseburgers
                    img={cheeseburger[0].img}
                />
                <TypesOfCheeseburgers
                    img={cheeseburger[1].img}
                />
                <TypesOfCheeseburgers
                    img={cheeseburger[2].img}
                />
                <TypesOfCheeseburgers
                    img={cheeseburger[3].img}
                />
            </div>
        </>
    )
}

export default ContentCheeseburger;