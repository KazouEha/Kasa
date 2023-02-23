import './Card.css';
import {Link} from 'react-router-dom';


/**
 * Component card will be used only on home page inside the gallery component
 * 
 * @param {*} houseImg background picture for the house
 * @param {*} houseId  used for the navlink to get to the house page
 * @param {*} houseTxt show the house title
 *  
 * @returns 
 */
function Card({houseImg ,houseId, houseTxt})
{
    return(
            
            <div className="divCard">
                <Link to={`/House/${houseId}`} className="card" style={{backgroundImage: `url(${houseImg})`}}>
                    
                    <div className="card__Filter"></div>
                    <div className="card__Txt">
                        {houseTxt}
                    </div>
                </Link>
            </div>
    )
}

export default Card
