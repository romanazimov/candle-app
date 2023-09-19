import './Review.scss';
import '@smastrom/react-rating/style.css'
import { Rating, ThinStar } from '@smastrom/react-rating';
  
const myStyles = {
    itemShapes: ThinStar,
    itemStrokeWidth: 2,
    activeFillColor: '#5BC08A',
    activeStrokeColor: '#5BC08A',
    // inactiveFillColor: '#5BC08A',
    inactiveStrokeColor: '#5BC08A'
}

interface ratingInfo {
    info: {
        img: string,
        rating: number,
        review: string,
        author: string
    }
}

function Review({info}:ratingInfo) {

    return(
        <div id="review-cont">
            <img className='author-img' src={info.img} alt='author_img' />
            <Rating
                className='rating'
                style={{ maxWidth: 150 }}
                value={info.rating}
                itemStyles={myStyles}
                readOnly
            />
            <p className='review'>{info.review}</p>
            <p className='author'>{info.author}</p>
        </div>
    )
}

export default Review