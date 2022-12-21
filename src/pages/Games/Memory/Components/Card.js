export default function Card({card, index, clickHandler}){
    return (
        <div className="card" onClick={() => clickHandler(card.name)}>
            <img src={card.img} alt={card.name} />
        </div>
    )
}