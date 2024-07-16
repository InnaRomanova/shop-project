

function BasketItem(props) {
    const {
        id,
        displayName,
        price,
        quantity,
        count,
        removeFromBasket = Function.prototype,
        hanldeClickPlu = Function.prototype,
        handleClickMin = Function.prototype } = props

    return (
        <>
            <li className="collection-item">
                {displayName} *
                {/* <i className="material-icons basket-quantity">
                    remove</i>  */}
                    x {quantity} = {' '}
                <i className="material-icons basket-quantity">add</i>
                {price * quantity} руб.
                <button onClick={() => hanldeClickPlu(id)}>+ </button>
                <span>{count}</span>
                <button onClick={() => handleClickMin(id)}> -</button>
                <span className="secondary-content"
                    onClick={() => removeFromBasket(id)}>
                    <i className="material-icons basket-delete">close</i></span></li>
        </>
    )
}

export default BasketItem;