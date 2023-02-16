import './Card.css';
import {Link} from 'react-router-dom';

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
