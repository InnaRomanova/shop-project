import { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../config";

import Preloader from "./Preloader";
import GoodsList from "./GoodsList";
import Cart from "./Cart";

function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);

    //функция addToBasket, которая принимает объект 
    //товара и добавляет его в состояние заказа order.
    const addToBasket = (item) => {
        //проверочый индекс
        const itemIndex = order.findIndex(
            orderItem => orderItem.id === item);

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            }
            setOrder([...order, newItem])
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    }
                } else {
                    return orderItem;
                }
            })
            setOrder(newOrder);
        }
    };


    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY, //запрос
            }
            //ответ: преобразуй в json
        }).then(response => response.json())
            .then(data => {
                //проверить пришли ли товары и вывести их
                data.featured && setGoods(data.featured);
                setLoading(false);
            })
    }, [])

    return (

        <main className="container content">
            <Cart quantity={order.length} />
            {loading ? <Preloader /> : <GoodsList goods={goods} 
            addToBasket={addToBasket}/>}
        </main>
    )
}

export default Shop;