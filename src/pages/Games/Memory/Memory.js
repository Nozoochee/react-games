import './Memory.css';
import { useState } from "react";
import Card from "./Components/Card";


export default function Memory(){

    const max_cards = 4;

    //Init cards
    //Chose random cards from them based on difficulty (unique)
    //Duplicate the array elements
    //Shuffle

    let cardArray = [];
    for (let i = 39; i <= 55; i++) {
        cardArray.push({id: i, name: `test${i}`, status: '', img: `/images/${i}.png`})
    }

    let finalArr = [];
    for (let i = 0; i < max_cards; i++) {
        finalArr.push(cardArray[Math.floor(Math.random()*cardArray.length)])
    }
    for (let i = 0; i < max_cards; i++) {
        finalArr.push(finalArr[i]);
    }
    finalArr.sort(() => Math.random() - 0.5)

    const [cards, setCards] = useState(finalArr)

    return (<>
        <h1>Pokemon Memory</h1>
        <div className="gamecontainer">
            {cards.map((card, index) => {
                return <Card card={card} key={index} />
            })}
        </div>
    </>
    )

    /*
    How to play:
    Random selection of cards in a grid
    Cards start off reversed
    Player clicks reversed card
    Card gets flipped
    Do it again
    See if card 1 == card 2
        yes: remove them
        no: remove 1 health, reverse cards
    repeat until there are no cards left OR player has run out of health

    display: grid is perfect for the cards
    */
}