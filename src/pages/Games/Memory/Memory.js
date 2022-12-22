import './Memory.css';
import { useState, useRef } from "react";
import Card from "./Components/Card";


export default function Memory(){

    const max_cards = 8;

    let cardArray = initializeCards(max_cards);

    const [previousCardState, setPreviousCardState] = useState(-1);
    //useRef is like useState but it doesn't redraw DOM
    const previousIndex = useRef(-1);

    const [cards, setCards] = useState(cardArray);

    const checkMatch = (index) => {
        if (cards[index].id === cards[previousCardState].id) {
            cards[previousCardState].status = 'active matched';
            cards[index].status = 'active matched';
            setPreviousCardState(-1);
        } else {
            cards[index].status = 'active';
            setCards([...cards]);
            setTimeout(()=>{
                setPreviousCardState(-1);
                cards[index].status = 'unmatch';
                cards[previousCardState].status = 'unmatch';
                setCards([...cards]);
                setTimeout(()=>{
                    cards[index].status = '';
                    cards[previousCardState].status = '';
                    setCards([...cards]);
                },600);
            }, 400);
        }
    }

    const clickHandler = (index) => {
        if (index !== previousIndex.current) {
            if(cards[index].status === 'active matched'){
                alert('already matched');
            } else {
                if (previousCardState === -1) {
                    previousIndex.current = index;
                    cards[index].status = 'active';
                    setCards([...cards]);
                    setPreviousCardState(index);
                } else {
                    checkMatch(index);
                    previousIndex.current = -1;
                }
            }
        } else {
            alert('card currently selected');
        }
    }

    return (<>
        <h1>Pokemon Memory</h1>
        <div className="gamecontainer">
            {cards.map((card, index) => {
                return <Card key={index} card={card} index={index} clickHandler={clickHandler}/>
            })}
        </div>
    </>
    )
}

/**
 * 
 * @param {number} max_cards 
 * @returns An array of random unique cards, duplicated so there's always 2
 */
function initializeCards(max_cards){
    let outArr = getAllCards();
    outArr = getRandomElementsFromArray(outArr, max_cards, false);
    let len = outArr.length;
    for(let i=0; i<len; i++){
        outArr.push({id: outArr[i].id, name: outArr[i].name, status: outArr[i].status, img: outArr[i].img});
    }
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
