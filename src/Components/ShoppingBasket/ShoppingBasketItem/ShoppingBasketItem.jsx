import './ShoppingBasketItem.css';

const ShoppingBasketItem = ({prod}) => {
    return (
        <div className='ShoppingBasketItem'>
            <img src={prod.image} alt="img"/>
            <div className='ShoppingBasketItemInfo'>
                <h1>{prod.title}</h1>
                <p>{prod.description}</p>
                <h2>{prod.price}$</h2>
            </div>
        </div>
    )
}

export default ShoppingBasketItem