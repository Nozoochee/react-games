import './Memory.css';
import { useState } from "react";
import Card from "./Components/Card";


export default function Memory(){

    const max_cards = 4;

    //Should work helThink, maybe needs dedicated button click
    //document.documentElement.style.setProperty('--grid-size', max_cards);

    //Init cards
    //Chose random cards from them based on difficulty (unique)
    //Duplicate the array elements
    //Shuffle

    let cardArray = initializeCards(max_cards);

    const [cards, setCards] = useState(cardArray)

    const clickHandler = (index) => {
        alert(index);
    }

    return (<>
        <h1>Pokemon Memory</h1>
        <div className="gamecontainer">
            {cards.map((card, index) => {
                return <Card card={card} key={index} clickHandler={clickHandler}/>
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
/**
 * 
 * @param {number} max_cards 
 * @returns An array of random unique cards, duplicated so there's always 2
 */
function initializeCards(max_cards){
    let outArr = getAllCards();
    outArr = getRandomElementsFromArray(outArr, max_cards, false);
    outArr = outArr.concat([...outArr]);
    outArr.sort(() => Math.random() - 0.5);

    return outArr;
}

function getAllCards(){
    let outArr = [];
    for (let i = 39; i <= 55; i++) {
        outArr.push({id: i, name: `card${i}`, status: '', img: `/images/${i}.png`})
    }
    return outArr;
}

function getRandomElementsFromArray(inArr, number, allowDuplicate){
    let outArr = [];
    if(number > inArr.length) {
        console.error('inArr has less elements than requested');
        return outArr;
    }
    
    while (outArr.length < number) {
        let randomElement = inArr[Math.floor(Math.random()*inArr.length)];
        if(allowDuplicate || !outArr.includes(randomElement)){
            outArr.push(randomElement);
        }
    }
    return outArr;
}
