

function Cart(props) {
    const {quantity = 0} = props;

    return(
        <div className="cart cyan lighten-1 white-text">
            <i className="material-icons">shopping_cart</i>
            {quantity ? <span className="cart-quantity">{quantity}</span> : null}
        </div>
    )
}

export default Cart;