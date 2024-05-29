

function BasketItem(props) {
    const {
        id,
        name,
        price,
        quantity,
        removeFromBasket = Function.prototype,
        hanldeClickPlu = Function.prototype,
        handleClickMin = Function.prototype } = props

    return (
        <>
            <li class="collection-item">
                {name} * {quantity} = {price * quantity} руб.
                <button onClick={hanldeClickPlu}>+</button>
                <span>{count}</span>
                <button onClick={handleClickMin}>-</button>
                <span href="#!" class="secondary-content"
                    onClick={() => removeFromBasket(id)}>
                    <i class="material-icons basket-delete">close</i></span></li>
        </>
    )
}

export default BasketItem;