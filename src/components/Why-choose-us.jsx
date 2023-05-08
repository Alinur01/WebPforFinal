import React from "react";

const WhyChooseUs = (props) => {
    return (
        <section className="Why-choose-us">
            <div className="flex">
                <div className="flex-column-center">
                    <img src={props.img} alt="Доставка"/>
                    <h4>{props.title}</h4>
                    <p>{props.subtitle}</p>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs;