import './Review.css';
import fullStar from './assets/fullstar.png';
import emptyStar from './assets/emptystar.png';

function Review({note})
{
    const review = [];

    for (let i = 1; i <= 5; i++) {
        review.push(
            <img key={i} src={ note >= i ? fullStar : emptyStar } className="stars__star" alt="etoiles pleine ou vide" />   
        )
    }

    return (
            <div className="stars">
                {review}
            </div>
    )
}

export default Review