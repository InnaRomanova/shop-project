import GoodsItem from "./GoodsItem";

function GoodsList(props) {
    //через пропсы бдет получать массив данных
    const { goods = [] } = props;
    if (!goods.lenght) {
        return <h3>Nothing here</h3>
    }

    return (
        <div className="goods">
            {goods.map(item => (
                <GoodsItem key={item.id} {...item} />
            ))}
        </div>

    )
}

export default GoodsList;