import React from "react";
import Reviews from "../reviews";

const reviews = [
    {
        desc: "Большое спасибо! 5 пицц доставили даже быстрее чем планировалось. Пицца была горячая и всему коллективу понравилась! День Рождения прошел отлично! :)",
    },
    {
        desc: "Очень вкусные роллы Хаки, всем рекомендую! заказали в первый раз и теперь станем постоянными клиентами! Спасибо!",
    },
    {
        desc: "Очень избирателен в еде, и Уже в третий раз не разочаровываюсь в Food Planet, советую всем! Жена тоже довольна!"
    },
    {
        desc: "Хочу поблагодарить за бургер !Очень вкусненький в меру остренький)\n" +
            "Спасибо,удивили!)"
    }
]


const ContentReviews = () => {
    return (
        <>
            <h2 className="reviews">Отзывы</h2>
            <div className="flex-reviews">
                <Reviews
                desc={reviews[0].desc}
                />
                <Reviews
                    desc={reviews[1].desc}
                />
                <Reviews
                    desc={reviews[2].desc}
                />
                <Reviews
                    desc={reviews[3].desc}
                />
            </div>

        </>
    )
}

export default ContentReviews