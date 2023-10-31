import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Addcart } from "../Navigation";

const AppData = ({Products}) => {
  const cardData = [
    {
      id: 1,
      title: "Card 1",
      description: "This is the first card."
    },
    {
      id: 2,
      title: "Card 2",
      description: "This is the second card."
    },
    {
      id: 3,
      title: "Card 3",
      description: "This is the third card."
    },
    {
      id: 4,
      title: "Card 4",
      description: "This is the fourth card."
    },
    {
      id: 2,
      title: "Card 2",
      description: "This is the second card."
    },
    {
      id: 3,
      title: "Card 3",
      description: "This is the third card."
    },
    {
      id: 4,
      title: "Card 4",
      description: "This is the fourth card."
    },
    {
        id: 4,
        title: "Card 4",
        description: "This is the fourth card."
      },
    // Add more cards here if needed.
  ];
  const cardConsumer=useContext(Addcart)

  // Define the number of cards to display in each row.
  const cardsPerRow = 4;

  // Create an array of rows, each containing a subset of card data.
  const rows = [];
  for (let i = 0; i < Products.length; i += cardsPerRow) {
    const row = Products.slice(i, i + cardsPerRow);
    rows.push(row);
  }

  return (
    <div className="container">
      {rows.map((row, rowIndex) => (
        <div className="row" key={rowIndex} style={{marginTop:30}} >
          {row.map((card) => (
            <div className="col" key={card.id}>
              <div className="card" style={{height:"200px",textAlign:"center"}}>
                <div className="card-body">
                  <h5 className="card-title">{card.title.slice(0,15)}</h5>
                  <img src={card.image} style={{width:"120px",height:"100px"}} alt=""/>
                 
                </div>
                <button style={{width:110,marginLeft:88,marginBottom:10}}><Link to={`/products/${card.id}`} style={{textDecoration:"none",color:"black"}}>view product</Link></button>
                <button onClick={()=>cardConsumer.CardHandeler(card)}><Link to={"/cart"} style={{textDecoration:"none",color:"black"}}>AddCart</Link></button>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default AppData;
