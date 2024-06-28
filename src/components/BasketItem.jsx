

function BasketItem(props) {
    const {
        mainId,
        displayName,
        price,
        quantity,
        count,
        removeFromBasket = Function.prototype,
        hanldeClickPlu = Function.prototype,
        handleClickMin = Function.prototype } = props

    return (
        <>
            <li class="collection-item">
                {displayName} * <i className="material-icons basket-quantity" onClick={() => handleClickMin(mainId)}>remove</i> x{quantity} = {' '}
                <i className="material-icons basket-quantity" onClick={() => hanldeClickPlu(mainId)}>add</i>
                {price * quantity} руб.
                <button onClick={hanldeClickPlu}>+</button>
                <span>{count}</span>
                <button onClick={handleClickMin}>-</button>
                <span href="#!" class="secondary-content"
                    onClick={() => removeFromBasket(mainId)}>
                    <i class="material-icons basket-delete">close</i></span></li>
        </>
    )
}

export default BasketItem;