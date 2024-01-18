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
        navigate(`/`)
    }

    let changeImgClassHandler = (e) => {
        e.currentTarget.classList.toggle('active');
    }

    return (
        <div className='Info'>
            {loading ? (
                <Preloader/>
            ) : (
                <>
                    <img src={info.image} alt='img' onClick={changeImgClassHandler}/>
                    <div className='Container'>
                        <h1>{info.title}</h1>
                        <p>{info.description}</p>
                        <h2>Category: {info.category}</h2>
                        <div className='Price'>
                            <h1>Price: </h1>
                            <h3>{parseFloat((info.price + 30).toFixed(2))}$</h3>
                            <h1>{info.price}$</h1>
                        </div>
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