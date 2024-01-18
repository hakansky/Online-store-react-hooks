import './Aside.css';
import {useState} from "react";

const Aside = ({ onCategoryChange }) => {
    let [selectedCategory, setSelectedCategory] = useState('all');
    let CategoryChangeHandler = (category) => {
        setSelectedCategory(category);
        onCategoryChange(category);
    }

    return (
        <aside className='Aside'>
            <form>
                <fieldset>
                    <legend>Choose category:</legend>
                    <div>
                        <input type="radio" id="All" name='Category' checked={selectedCategory === 'all'} onChange={() => CategoryChangeHandler('all')}/>
                        <label htmlFor="All">All</label>
                    </div>
                    <div>
                        <input type="radio" id="MenClothing" name='Category' checked={selectedCategory === `men's clothing`} onChange={() => CategoryChangeHandler(`men's clothing`)}/>
                        <label htmlFor="Men's clothing">Men's clothing</label>
                    </div>
                    <div>
                        <input type="radio" id="WomenClothing" name='Category' checked={selectedCategory === `women's clothing`} onChange={() => CategoryChangeHandler(`women's clothing`)}/>
                        <label htmlFor="Women's clothing">Women's clothing</label>
                    </div>
                    <div>
                        <input type="radio" id="Electronics" name='Category' checked={selectedCategory === 'electronics'} onChange={() => CategoryChangeHandler('electronics')}/>
                        <label htmlFor="Electronics">Electronics</label>
                    </div>
                    <div>
                        <input type="radio" id="Jewelery" name='Category' checked={selectedCategory === 'jewelery'} onChange={() => CategoryChangeHandler('jewelery')}/>
                        <label htmlFor="Jewelery">Jewelry</label>
                    </div>
                </fieldset>
            </form>
        </aside>
    )
}

export default Aside;