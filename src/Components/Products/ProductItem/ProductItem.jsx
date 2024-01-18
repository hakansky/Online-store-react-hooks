import './ProductItem.css';
import {useNavigate} from "react-router-dom";

const ProductItem = ({product}) => {

    let navigate = useNavigate();

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
                <button>Add to card</button>
            </div>
        </div>
    )
}

export default ProductItem;