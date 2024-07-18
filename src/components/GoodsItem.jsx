import { useContext } from "react";
import { ShopContext } from "./context";


function GoodsItem(props) {
    const {
        mainId,
        displayName,
        name,
        displayDescription,
        price,
        full_background,
    } = props;

    const {addToBasket} = useContext(ShopContext)

    return (
        <div className="card" id="id">
            <div className="card-image">
                <img src={full_background} alt={name} />
                <span className="card-title">{displayName}</span>
            </div>
            <div className="card-content">
                <p>{displayDescription}</p>
            </div>
            <div className="card-action">
                <button className="btn" onClick={() => addToBasket({
                    mainId,
                    displayName,                    
                    price,
                })}>Купить</button>
                <span className="right">{price}</span>
            </div>
        </div>
    )
}

export default GoodsItem;