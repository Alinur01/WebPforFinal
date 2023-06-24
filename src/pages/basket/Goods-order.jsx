import React from "react";
import Header from "../../components/Header";
import cheeseburger from "../../media/img/second-cheeseburger.png";
import Footer from "../../components/Footer";

const GoodsOrder = () => {

    const cartData = JSON.parse(localStorage.getItem("products", "pizzaProducts"));


    const totalPrice = cartData.reduce(
        (total, item) => total + item.count * item.price,
        0
    );

    return (
        <>
            <Header/>
            <section className="order">
                <div className="container">
                    <h2>Оформление заказа</h2>
                    <a href="src/pages/basket/Goods-order#" className="indent">Я новый покупатель</a>
                    <a href="src/pages/basket/Goods-order#">Авторизоваться</a>
                    <div className="flex">
                        <div className="personal-information">
                            <input type="text" placeholder="Фамилия" id="surename"/>
                            <label htmlFor="surename"></label>
                            <input type="text" placeholder="Имя" id="name"/>
                            <label htmlFor="name"></label>
                            <input type="text" placeholder="Мобильный телефон: +996552263088" id="phone-number"/>
                            <label htmlFor="phone-number"></label>
                            <input type="text" placeholder="email" id="email"/>
                            <label htmlFor="email"></label>
                        </div>
                        <div className="promo-code">
                            <div className="bg-promoCode">
                                <h4>Промокод</h4>
                                <input type="text" placeholder="Введите сюда промокод" className="inp-promoCode"/>
                                <h2>Итого:</h2>
                                <div className="flex">
                                    <p>Товар на сумму</p>
                                    <p className="price"><b>{totalPrice} сом</b></p>
                                </div>
                                <div className="flex">
                                    <p>К оплате</p>
                                    <p className="price1"><b>{totalPrice} сом</b></p>
                                </div>
                                <button>Подтвердить заказ</button>
                                <p>Подтверждая заказ, я принимаю условия <a href="src/pages/basket/Goods-order#">пользовательского соглашения</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="your-product">
                        <div className="basket-top">
                            <h2>Ваш заказ</h2>
                            <div className="d-flex-basket-second-stage">
                                <p>Продукт</p>
                                <p className="count-basket">Количество</p>
                                <p className="indent-2">К оплате</p>
                            </div>
                            {cartData.map((item, test) => {
                                const totalPriceItem = item.count * item.price;
                                return (
                                    <div className="d-flex2">
                                        <img src={item.img} alt="Чизбургер"
                                             className="cheeseburger-bascetSecond-stage"/>
                                        <h4 className="h4-mR"><b>{item.name}</b></h4>
                                        <p className="p-mR"><b>{item.count}</b></p>
                                        <p className="price-basket-mL"><b>{item.price} сом</b></p>
                                    </div>
                                );
                            })}
                            <div className="total1">
                                <h2>Итого:</h2>
                                <p className="total-price"><b>{totalPrice} сом</b></p>
                            </div>
                            <hr className="hr5"/>
                            <div>
                                <h3>Адрес доставки</h3>
                                <div className="flex-column">
                                    <div className="flex">
                                        <div className="self-call">
                                            <input type="radio" name="contact"/>
                                            <label htmlFor="examplecheckbox1"
                                                   className="shipping-ways">Самовывзов</label>
                                        </div>
                                        <div className="self-call">
                                            <input type="radio" name="contact"/>
                                            <label htmlFor="examplecheckbox1" className="shipping-ways">Курьерская доставка</label>
                                        </div>
                                    </div>

                                    <h3>Способ оплаты</h3>
                                    <div className="flex">
                                        <div className="self-call">
                                            <input type="radio" name="contact1"/>
                                            <label htmlFor="examplecheckbox1"
                                                   className="shipping-ways">Оплата курьеру на месте
                                            </label>
                                        </div>
                                        <div className="self-call">
                                            <input type="radio" name="contact1"/>
                                            <label htmlFor="examplecheckbox1" className="shipping-ways">Денежный перевод</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="comment-order">
                                <h3>Комментраий к заказу</h3>
                                <input type="text" className="comment-to-the-order"/>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default GoodsOrder