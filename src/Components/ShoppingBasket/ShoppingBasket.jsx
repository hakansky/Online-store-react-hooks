import './ShoppingBasket.css';
import {useNavigate, useParams} from 'react-router-dom';
import ShoppingBasketItem from "./ShoppingBasketItem/ShoppingBasketItem";
import {useEffect, useState} from "react";

const ShoppingBasket = () => {
    const { products } = useParams();
    const parsedProducts = products ? JSON.parse(decodeURIComponent(products)) : [];
    const [totalPrice, setTotalPrice] = useState(0);
    let navigate = useNavigate();

    const GoBackHandler = () => {
        navigate(`/`)
    }

    useEffect(() => {
        const calculateTotalPrice = () => {
            const prices = parsedProducts.map(prod => prod.price);
            const total = prices.reduce((acc, price) => acc + price, 0);
            setTotalPrice(total);
        };

        calculateTotalPrice();
    }, [parsedProducts]);

    return (
        <div className='ShoppingBasket'>
            <h1>Your orders:</h1>
            <div className='Orders'>
                {
                    parsedProducts.map(prod => <ShoppingBasketItem prod={prod} key={prod.id}/>)
                }
            </div>
            <h1>Total Price: {parseFloat((totalPrice).toFixed(2))}$</h1>
            <button className='backButton' onClick={() => GoBackHandler()}>Go back</button>
        </div>
    )
}

export default ShoppingBasket;