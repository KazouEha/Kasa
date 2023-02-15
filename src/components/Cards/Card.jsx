import './Card.css';

function Card({img ,txt})
{
    return(
        <div className="card">
            <p className="card__Txt">{txt}</p>
        </div>
    )
}

export default Card
