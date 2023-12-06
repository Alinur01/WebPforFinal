import React from "react";
import avatar from "../media/img/avatar.png";
import pen from "../media/icons/pen.svg";
import bgPen from "../media/icons/bg-pen.svg";

const Reviews = (props) => {
    return (
        <section className="review">
            <img src={bgPen} className="bg-pen"/>
            <div className="review-card">
                <img src={avatar} alt="Аватарка пользователя" className="avatar-user"/>
                <h4>Сергей <img src={pen}/></h4>
                <p className="desc">{props.desc}</p>
                <p className="comment-date">02.07.2020</p>
            </div>
        </section>
    )
}

export default Reviews;