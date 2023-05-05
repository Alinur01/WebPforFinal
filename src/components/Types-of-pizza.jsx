import React from "react";
import minus from "./pages/icons/minus.svg";
import plus from "./pages/icons/plus 9.svg";

const TypesOfPizza = (props) => {
    return(
        <>
            <div className="pizza-menu">
                <div className="background-for-pizza">
                    <img src={props.img} alt="пица"/>
                    <h3>Мексиканская</h3>
                    <p className="desc">Булка, котлета,сыр, соленый <br/> огурец, лук, помидор,
                        салат <br/> айсберг,
                        соус чесночный, соус <br/> гриль,
                        кетчуп, майонез</p>
                    <p className="price">200 сом</p>
                    <p className="quantity"><img src={minus} alt="увеличить количесвто" className="minus"/>1<img src={plus} alt="уменьшить количество" className="plus"/></p>
                    <button>В корзину</button>
                </div>
            </div>
        </>

    )
}

export default TypesOfPizza;