import { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../config";

import Preloader from "./Preloader";
import GoodsList from "./GoodsList";
import Cart from "./Cart";

function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY //запрос
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
            <Cart quantity={goods.length} />
            {loading ? <Preloader /> : <GoodsList goods={goods} />}
        </main>
    )
}

export default Shop;