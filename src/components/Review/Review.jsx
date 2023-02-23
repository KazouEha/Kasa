import './Review.css';
import fullStar from './assets/fullstar.png';
import emptyStar from './assets/emptystar.png';


/**
 * Review component shown on house page
 * create an empty array which will be filled using the note prop
 * as long as note is superior or equal to i (which is set to 5 because we want 5 stars), create a <img> with fullstar
 * when i is superior to note then create a img with emptystar
 * then the array is rendered 
 * 
 * @param {*} note 
 * @returns 
 */
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