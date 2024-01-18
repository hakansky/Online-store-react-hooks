import './Review.css';
import likeImg from '../../../assets/img/like.png'

const Review = ({review}) => {
    let changeImgClassHandler = (e) => {
        e.currentTarget.classList.toggle('active');
    }


    return (
        <div className='Review'>
            <h3>{review.name}</h3>
            <p>{review.text}</p>
            <h5>Date: {review.date}</h5>
            <img src={likeImg} alt="img" onClick={changeImgClassHandler}/>
        </div>
    )
}

export default Review;