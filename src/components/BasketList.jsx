import BasketItem from './BasketItem';

function BasketList(props) {

    const { order,
        handleBasketShow = Function.prototype,
        removeFromBasket = Function.prototype,
        handleClickMin = Function.prototype,
        hanldeClickPlu = Function.prototype } = props;

    //общая стоимость в корзине
    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity
    }, 0)

    return (
        <ul className="collection basket-list">
            <li cliss="collection-item ictive">Корзина</li>
            {order.length ? order.map(item => (
                <BasketItem 
                key={item.id} {...item} 
                removeFromBasket={removeFromBasket}
                handleClickMin={handleClickMin}
                hanldeClickPlu={hanldeClickPlu}/>
            )) : (<li className="collection-item">Корзина пуста</li>)}
            <li className="collection-item active">Общая стоимость: {totalPrice} руб.</li>
            <i className='material-icons basket-close'
                onClick={handleBasketShow}>close</i>
        </ul>
    )
}

export default BasketList;