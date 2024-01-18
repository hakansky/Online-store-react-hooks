import './Products.css';
import ProductItem from "./ProductItem/ProductItem";
import {useEffect, useState} from "react";
import axios from "axios";
import Preloader from "../Preloader/Preloader";
import Aside from "../Aside/Aside";

const Products = () => {
    let [products, setProducts] = useState([]);
    let [selectedCategory, setSelectedCategory] = useState('all');
    let [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        axios.get(`https://fakestoreapi.com/products${selectedCategory !== 'all' ? `?category=${selectedCategory}` : ''}`)
            .then(response => {console.log(response.data); setProducts(response.data); setLoading(false)})
    }, [selectedCategory])

    const CategoryChangeHandler = (category) => {
        setSelectedCategory(category);
    };

    const filteredProducts = selectedCategory === 'all'
        ? products
        : products.filter(product => product.category === selectedCategory);

    return (
        <div className='Products'>
            <Aside onCategoryChange={CategoryChangeHandler} />
            {
                products.length > 0 ? filteredProducts.map(product => <ProductItem product={product} key={product.id}/>) : <Preloader/>
            }
        </div>
    )
}

export default Products;