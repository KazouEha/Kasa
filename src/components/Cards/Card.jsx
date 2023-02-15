import './Card.css';

function Card({houseImg ,houseId, houseTxt})
{
    return(
        <div className="card">
            <img className="card__Img" src={houseImg} id={houseId}/>
            <p className="card__Txt">{houseTxt}</p>
        </div>
    )
}

export default Card
