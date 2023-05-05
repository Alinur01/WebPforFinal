import React from "react";
import plus from "./pages/icons/plus 9.svg"
import minus from "./pages/icons/minus.svg"


const TypesOfCheeseburgers = (props) => {
    return (
        <div className="burger-menu">
            <div className="background-for-cheeseburger">
                <img src={props.img} alt="Чизбургер"/>
                <h3>Чизбургер</h3>
                <p className="desc">Булка, котлета,сыр, соленый <br/> огурец, лук, помидор,
                    салат <br/> айсберг,
                    соус чесночный, соус <br/> гриль,
                    кетчуп, майонез</p>
                <p className="price">200 сом</p>
                <p className="quantity"><img src={minus} alt="увеличить количесвто" className="minus"/>1<img src={plus} alt="уменьшить количество" className="plus"/></p>
                <button>В корзину</button>
            </div>
        </div>
    )
}

export default TypesOfCheeseburgers;