import React from "react";
import WhyChooseUs from "../Why-choose-us";
import instantDelivery from "../pages/icons/instant-delivery.svg"
import freshFood from "../pages/icons/fresh-food.svg"
import uniqueMenu from "../pages/icons/unique-menu.svg"
import delivery from "../pages/icons/delivery.svg"


const cardQuality = [
    {
        img: [instantDelivery],
        title: 'Мгновенная доставка',
        subtitle: 'Доставим заказанную вами\n' + 'еду за 30 минут + напиток в подарок',
    },
    {
        img: [freshFood],
        title: "Свежие продукты",
        subtitle: "Вся продукция хранится в хороших условиях тем самым продливая срок хранения",
    },
    {
        img: [uniqueMenu],
        title: 'Уникальное меню',
        subtitle: 'Ежедневно мы обновляем наше \n' +
            'меню и том числе коктейльное',
    },
    {
        img: [delivery],
        title: 'Доставка',
        subtitle: 'Мы быстро доставляем вашу еду по указанному адресу',
    },
]

const ContentWhyChooseUs = () => {
    return (
        <>
            <h2 className="choose-us">Почему выбирают нас:</h2>
            <div className="flex-gap">
                <WhyChooseUs
                    img={cardQuality[0].img}
                    title={cardQuality[0].title}
                    subtitle={cardQuality[0].subtitle}
                />
                <WhyChooseUs
                    img={cardQuality[1].img}
                    title={cardQuality[1].title}
                    subtitle={cardQuality[1].subtitle}
                />
                <WhyChooseUs
                    img={cardQuality[2].img}
                    title={cardQuality[2].title}
                    subtitle={cardQuality[2].subtitle}
                />
                <WhyChooseUs
                    img={cardQuality[3].img}
                    title={cardQuality[3].title}
                    subtitle={cardQuality[3].subtitle}
                />
            </div>

        </>
    )
}

export default ContentWhyChooseUs