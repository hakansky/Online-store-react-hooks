import './Products.css';
import ProductItem from "./ProductItem/ProductItem";
import {useEffect, useState} from "react";
import axios from "axios";
import Preloader from "../Preloader/Preloader";
import Aside from "../Aside/Aside";
import shoppingBasket from "../../assets/img/shopping-basket.png";
import {useNavigate} from "react-router-dom";

const Products = () => {
    let [products, setProducts] = useState([]);
    let [selectedCategory, setSelectedCategory] = useState('all');
    let [loading, setLoading] = useState(true);
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const updatedCart = [...cart, product];
        setCart(updatedCart);
    };

    let navigate = useNavigate();

    const handleMoveToBasket = () => {
        navigate(`/basket/${encodeURIComponent(JSON.stringify(cart))}`);
    };

    useEffect(() => {
        setLoading(true);
        axios.get(`https://fakestoreapi.com/products${selectedCategory !== 'all' ? `?category=${selectedCategory}` : ''}`)
            .then(response => {setProducts(response.data); setLoading(false)})
    }, [selectedCategory])

    const CategoryChangeHandler = (category) => {
        setSelectedCategory(category);
    };

    const filteredProducts = selectedCategory === 'all'
        ? products
        : products.filter(product => product.category === selectedCategory);

    return (
        <div className='Products'>
            <div className='BasketDiv'>
                <img src={shoppingBasket} alt="img" className='shoppingBasket' onClick={handleMoveToBasket}/>
            </div>
            {
                cart.length > 0 ? <h1 className='CartLength'>{cart.length}</h1> : null
            }
            <Aside onCategoryChange={CategoryChangeHandler} />
            {
                products.length > 0 ? filteredProducts.map(product => <ProductItem product={product} key={product.id} addToCart={addToCart}/>) : <Preloader/>
            }
        </div>
    )
}

export default Products;