import React, { useEffect, useState } from "react";
import classes from "./PokemonCards.module.scss";
const PokemonCard = ({ url }) => {
  const [card, setCard] = useState();

  useEffect(() => {
    const fetchCard = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setCard(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCard();
  }, [url]);

  return (
    <div className={classes.pokemonCards}>
      {card ? (
        <>
          <img
            src={card.sprites.front_default}
            alt={card.name}
            className={classes.image}
          />
          <h3>{card.name}</h3>
        </>
      ) : (
        ""
      )}
      <button className={classes.btn}>Подробнее</button>
    </div>
  );
};

export default PokemonCard;
