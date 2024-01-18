import './Reviews.css';
import Review from "./Review/Review";
import {useState} from "react";

const Reviews = () => {
    let [reviews, setReviews] = useState([
        {
            id: 1,
            name: 'Paul',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet beatae distinctio ducimus exercitationem id ipsa mollitia pariatur saepe sunt!',
            date: '10/09/2023, 11:32:05'
        },
        {
            id: 2,
            name: 'Mike',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet beatae distinctio ducimus exercitationem id ipsa mollitia pariatur saepe sunt!',
            date: '15/03/2022, 06:56:59'
        },
        {
            id: 3,
            name: 'John',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet beatae distinctio ducimus exercitationem id ipsa mollitia pariatur saepe sunt!',
            date: '30/12/2021, 09:25:16'
        },
    ])
    let [currentReview, setCurrentReview] = useState('')
    let [currentName, setCurrentName] = useState('')

    const AddReviewHandler = () => {
        const review = {
            id: reviews.length + 2,
            name: currentName,
            text: currentReview,
            date: new Date().toLocaleString(),
        }
        setReviews([review, ...reviews]);
        setCurrentReview('');
    }

    const CurrentReviewHandler = (e) => {
        let currentReview = e.currentTarget.value;
        setCurrentReview(currentReview)
    }

    const CurrentNameHandler = (e) => {
        let currentName = e.currentTarget.value;
        setCurrentName(currentName);
    }

    return (
        <div className='Reviews'>
            <h2>Reviews</h2>
            <h4>Leave your review</h4>
            <input type="text" name="name" placeholder='Enter your name' onChange={CurrentNameHandler}/>
            <textarea name="review" cols="40" rows="3" placeholder='Enter your review' onChange={CurrentReviewHandler} value={currentReview}></textarea>
            <button onClick={AddReviewHandler}>Send a review</button>
            {
                reviews.map(review => <Review review={review} key={review.id}/>)
            }
        </div>
    )
}

export default Reviews;