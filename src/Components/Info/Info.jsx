import './Info.css';
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import Preloader from "../Preloader/Preloader";
import Reviews from "../Reviews/Reviews";

const Info = () => {
    let [info, setInfo] = useState({})
    let [loading, setLoading] = useState(true);
    let {productId} = useParams()
    let navigate = useNavigate()

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${productId}`)
            .then(response => {
                setInfo(response.data);
                setLoading(false);
            })
    }, [])

    const GoBackHandler = () => {
        navigate(`/Online-store-react-hooks/`)
    }

    return (
        <div className='Info'>
            {loading ? (
                <Preloader/>
            ) : (
                <>
                    <img src={info.image} alt='img'/>
                    <div className='Container'>
                        <h1>{info.title}</h1>
                        <p>{info.description}</p>
                        <h2>Category: {info.category}</h2>
                        <h1>Price: {info.price}$</h1>
                        <button className='addToCartButton'>Add to cart</button>
                        <button className='backButton' onClick={() => GoBackHandler()}>Go back</button>
                        <Reviews/>
                    </div>
                </>
            )}
        </div>
    )
}

export default Info;