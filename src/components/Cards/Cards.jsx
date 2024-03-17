import { useEffect, useState } from "react";


const Cards = () => {
    const [cards, setCards] = useState([]);

    useEffect(() =>{
      fetch('data.json')
      .then((res) =>res.json())
      .then((data) =>{
       setCards(data)
      })
    }, [])
    return (
        <div className="md:w-2/3">
            <h2 className="text-4xl">Cards:{cards.length}</h2>
        </div>
    );
};

export default Cards;