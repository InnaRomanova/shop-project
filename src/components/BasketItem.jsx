import { useContext } from "react";
import { ShopContext } from "./context";

function BasketItem(props) {
    const {
        id,
        name,
        displayName,
        price,
        quantity,
        count,
        //removeFromBasket = Function.prototype,
        hanldeClickPlu = Function.prototype,
        handleClickMin = Function.prototype } = props;

        const {removeFromBasket, incQuantity, decQuantity} = useContext(ShopContext);

    return (
        <>
            <li className="collection-item">
                {displayName} *
                {/* <i className="material-icons basket-quantity">
                    remove</i>  */}
                x {quantity} = {' '}
                {/* <i className="material-icons basket-quantity"></i> */}
                {price * quantity} руб.
                <button onClick={() => hanldeClickPlu(id)}
                    className="material-icons basket-quantity">add </button>
                <span>{count}</span>
                <button onClick={() => handleClickMin(id)}
                    className="material-icons basket-quantity">remove</button>
                <span className="secondary-content"
                    onClick={() => removeFromBasket(id)}>
                    <i className="material-icons basket-delete">close</i></span></li>
        </>
    )
}

export default BasketItem;