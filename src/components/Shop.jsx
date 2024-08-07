import { useEffect, useContext } from "react";
import { API_KEY, API_URL } from "../config";
import { ShopContext } from "./context";
import Preloader from "./Preloader";
import GoodsList from "./GoodsList";
import Cart from "./Cart";
import BasketList from "./BasketList";
import Alert from "./Alert";

function Shop() {
    const { loading, order, isBasketShow, alertName, setGoods } = useContext(ShopContext);
    // const [goods, setGoods] = useState([]);
    //const [loading, setLoading] = useState(true);
    //const [order, setOrder] = useState([]);
    // const [isBasketShow, setBasketShow] = useState(false);
    // const [alertName, setAlertName] = useState('');


    //функция addToBasket, которая принимает объект 
    //товара и добавляет его в состояние заказа order.
    //const addToBasket = (item) => {
    //проверочый индекс
    //     const itemIndex = order.findIndex(
    //         (orderItem) => orderItem.id === item.id);

    //     if (itemIndex < 0) {
    //         const newItem = {
    //             ...item,
    //             quantity: 1,
    //         }
    //         setOrder([...order, newItem])
    //     } else {
    //         const newOrder = order.map((orderItem, index) => {
    //             if (index === itemIndex) {
    //                 return {
    //                     ...orderItem,
    //                     quantity: orderItem.quantity + 1
    //                 }
    //             } else {
    //                 return orderItem;
    //             }
    //         })
    //         setOrder(newOrder);
    //     }
    //     setAlertName(item.name);
    // };

    //удаление товара из корзины
    // const removeFromBasket = (itemId) => {
    //     //обойдем order  отфильтруем его и уберем лишнее
    //     const newOrder = order.filter((el) => el.id !== itemId)
    //     setOrder(newOrder);
    // }

    //увеличенение/добавление количества товаров в корзине
    // const hanldeClickPlu = (itemId) => {
    //     const newOrder = order.map(el => {
    //         if (el.id === itemId) {
    //             const newQuantity = el.quantity + 1;
    //             return {
    //                 ...el,
    //                 quantity: newQuantity
    //             }
    //         } else {
    //             return el
    //         }
    //     });
    //     setOrder(newOrder);
    // }

    //уменьшение количества товаров в корзине
    // const handleClickMin = (itemId) => {
    //     const newOrder = order.map(el => {
    //         if (el.id === itemId) {
    //             const newQuantity = el.quantity - 1;
    //             return {
    //                 ...el,
    //                 quantity: newQuantity >= 0 ? newQuantity : 0,
    //             }
    //         } else {
    //             return el
    //         }
    //     })
    //     setOrder(newOrder);
    // }

    // const handleBasketShow = () => {
    //     setBasketShow(!isBasketShow);
    // }

    // const closeAlert = () => {
    //     setAlertName('');
    // }


    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY, //запрос
            },
            //ответ: преобразуй в json
        }).then(response => response.json())
            .then(data => {
                //проверить пришли ли товары и вывести их
                // data.featured && 
                setGoods(data.featured);
                // setLoading(false);
            })
    }, [])

    return (

        <main className="container content">
            <Cart quantity={order.length}
                // handleBasketShow={handleBasketShow} 
                />
            {loading ? <Preloader /> : <GoodsList 
            //goods={goods}
            // addToBasket={addToBasket} 
            />}
            {isBasketShow && (
                <BasketList
                // order={order}
                //     handleBasketShow={handleBasketShow}
                //     removeFromBasket={removeFromBasket}
                //     hanldeClickPlu={hanldeClickPlu}
                //     handleClickMin={handleClickMin} 
                />)}
            {alertName && <Alert
                // name={alertName}
                // closeAlert={closeAlert} 
                />}
        </main>
    )
}

export default Shop;