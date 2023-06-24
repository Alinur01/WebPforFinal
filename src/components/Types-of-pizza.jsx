import React, { useState } from "react";
import minus from "../media/icons/minus.svg";
import plus from "../media/icons/plus 9.svg";
import { setProduct, getProduct, checkProduct } from "../constants/translation-of-the-page-into-json";
import { useParams } from "react-router-dom";
import data from "../db.json";

const TypesOfPizza = ({ name, desc, price, img, id }) => {
    const params = useParams();
    const [test, setTest] = useState(true);
    const di = params.id;
    const products = data.products.slice(4, 8);

    const [counts, setCounts] = useState(Array(4).fill(1));

    const incrementCount = (index) => {
        setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            newCounts[index] = newCounts[index] + 1;
            return newCounts;
        });
    };

    const decrementCount = (index) => {
        if (counts[index] === 1) return;
        setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            newCounts[index] = newCounts[index] - 1;
            return newCounts;
        });
    };
    const handleAddToPizza = (index) => {
        const selectedProduct = products[index];
        const dataToSend = {
            name: selectedProduct.name,
            desc: selectedProduct.desc,
            price: selectedProduct.price,
            count: counts[index],
            img: selectedProduct.img,
            id: selectedProduct.id
        };

        const cardList = getProduct();
        let list;

        if (cardList) {
            if (checkProduct(cardList, selectedProduct.id)) {
                list = [...cardList];
            } else {
                list = [...cardList, dataToSend];
            }
        } else {
            list = [dataToSend];
        }

        setProduct(list);
        localStorage.setItem("cheeseburgers", JSON.stringify(list)); // Save the entire 'list' array to localStorage
    };
    return (
        <>
            {products.map((product, index) => (
                <div className="pizza-menu" key={product.id}>
                    <div className="background-for-pizza">
                        <img src={product.img} alt="пица" />
                        <h3>{product.name}</h3>
                        <p className="desc">{product.desc}</p>
                        <p className="price pizza-price">{product.price} сом</p>
                        <p className="quantity">
                            <img
                                src={minus}
                                alt="увеличить количество"
                                className="minus"
                                onClick={() => decrementCount(index)}
                            />
                            {counts[index]}
                            <img
                                src={plus}
                                alt="уменьшить количество"
                                className="plus"
                                onClick={() => incrementCount(index)}
                            />
                        </p>
                        <button onClick={() => handleAddToPizza(index)}>В корзину</button>
                    </div>
                </div>
            ))}
        </>
    );
};

export default TypesOfPizza;
