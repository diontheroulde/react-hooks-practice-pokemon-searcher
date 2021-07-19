import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const {name, hp, sprites } = pokemon
  const [isFront, setIsFront] = useState(true)

  const handleCardClick = () => {
    setIsFront(!isFront)
  }

  return (
    <Card>
      <div onClick={handleCardClick}>
        <div className="image">
          <img alt="oh no!" src={isFront ? sprites.front : sprites.back }/>
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
