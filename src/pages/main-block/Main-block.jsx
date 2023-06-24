import React from "react";
import further from "../../media/icons/next-btn.svg"
import main from "../../media/img/mian-img.png"

const MainBlock = () => {

    return(
        <main>
            <div className="main-block">{/*основной блок*/}
                <div className="flex-column">
                    <h2>Доставка вкусной еды <br/> до 30 минут + напиток <br/> в подарок!</h2>
                    <p>Доставим заказ вовремя и можете рассчитывать, что <br/> еда будет доставлен всегда горячим и ароматным.</p>
                    <button>Перейти в меню <img src={further} alt="Далее"/></button>
                </div>
                <img src={main} alt="" className="main-img"/>
            </div>
        </main>
    )
}

export default MainBlock;