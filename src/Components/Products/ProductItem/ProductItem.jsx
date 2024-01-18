import './ProductItem.css';
import {useNavigate} from "react-router-dom";

const ProductItem = ({product}) => {

    let navigate = useNavigate();

    const MoreInfoHandler = () => {
        navigate(`/Online-store-react-hooks/info/${product.id}`)
    }

    return (
        <div className='ProductItem'>
            <div className='MainProductInfo'>
                <img src={product.image} alt="img"/>
                <h1>{product.title}</h1>
            </div>
            <div className='SecondaryProductInfo'>
                <p>{product.price}$</p>
                <button onClick={() => MoreInfoHandler()}>More info..</button>
                <button>Add to card</button>
            </div>
        </div>
    )
}

export default ProductItem;