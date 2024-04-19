import './Card.css';
import './assets/fonts/fonts.css';
import { useState } from 'react';
import MoneyIcon from './components/MoneyIcon';
import HealthIcon from './components/HealthIcon';
import SpecDefIcon from './components/SpecDefIcon';
import DefIcon from './components/DefIcon';
import SpeedIcon from './components/SpeedIcon';
import SpecAttIcon from './components/SpecAttIcon';
import AttIcon from './components/AttIcon';

function Card({ pokemon, onClick }) {
  const { name, imageURL, weight, hp, att, def, specAtt, specDef, speed } =
    pokemon;
  const baseStats = hp + att + def + specAtt + specDef + speed;
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Decrement the count by 1 (prevent going below 0)
  const handleDecrement = () => {
    setCount(Math.max(count - 1, 0));
  };

  return (
    <div className="card">
      <div className="row-one">
        <img src={imageURL} alt={name} />
        <div className="card-sub-info">
          <div className="stat-display">
            <HealthIcon />
            <p>{hp}</p>
          </div>
          <div className="stat-display">
            <AttIcon />
            <p>{att}</p>
          </div>
          <div className="stat-display">
            <DefIcon />
            <p>{def}</p>
          </div>
          <div className="stat-display">
            <SpecAttIcon />
            <p>{specAtt}</p>
          </div>
          <div className="stat-display">
            <SpecDefIcon />
            <p>{specDef}</p>
          </div>
          <div className="stat-display">
            <SpeedIcon />
            <p>{speed}</p>
          </div>
        </div>
      </div>
      <div className="row-two">
        <h2>{name.toUpperCase()}</h2>
        <div className="cost">
          <MoneyIcon />
          <h3>{baseStats + weight}</h3>
        </div>
      </div>

      <div className="row-three">
        <div className="increment-decrement">
          <button className="inc-dec" onClick={handleIncrement}>
            +
          </button>
          <div>{count}</div>
          <button className="inc-dec" onClick={handleDecrement}>
            -
          </button>
        </div>
        <button className="add-to-cart" onClick={() => onClick(name, count)}>
          Add to Cart!
        </button>
      </div>
    </div>
  );
}

export default Card;
