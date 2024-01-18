import './ProductItem.css';
import {useNavigate} from "react-router-dom";
import {useState} from "react";

const ProductItem = ({product, addToCart}) => {

    let navigate = useNavigate();

    const handleAddToCart = () => {
        addToCart(product);
    };

    const MoreInfoHandler = () => {
        navigate(`/info/${product.id}`)
    }

    return (
        <div className='ProductItem'>
            <div className='MainProductInfo'>
                <img src={product.image} alt="img"/>
                <h1>{product.title}</h1>
            </div>
            <div className='SecondaryProductInfo'>
                <p>{parseFloat((product.price + 30).toFixed(2))}$</p>
                <h2>{product.price}$</h2>
                <button onClick={() => MoreInfoHandler()}>More info..</button>
                <button onClick={handleAddToCart}>Add to cart</button>
            </div>
        </div>
    )
}

export default ProductItem;