
function Card(props) {

    function handleCardClick() {
        props.onCardClick(props.card);
    }

    return (
        <article className="element__item" key={props.card.id}>
            <img className="element__photo" src={props.card.link} alt={props.card.name} onClick={handleCardClick}></img>
            <div className="element__data">
                <h3 className="element__name" type="text">{props.card.name}</h3>
                <button className="element__like" type="button"></button>
            </div>
            <p className="element__likecounter">{[props.card.likes.length]}</p>
            <button className="element__delete-button"></button>
        </article>

    )
}

export default Card
