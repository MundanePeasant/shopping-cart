import './Card.css';
import './assets/fonts/fonts.css';

function Card({ pokemon }) {
  const { name, imageURL, weight, hp, att, def, specAtt, specDef, speed } =
    pokemon;
  const baseStats = hp + att + def + specAtt + specDef + speed;

  return (
    <div className="card">
      <div className="row-one">
        <img src={imageURL} alt={name} />
        <div className="card-sub-info">
          <p>{weight}</p>
          <p>{hp}</p>
          <p>{att}</p>
          <p>{def}</p>
        </div>
      </div>
      <h2>{name.toUpperCase()}</h2>
      <div className="row-two">
        <div className="increment-decrement">
          <div>+</div>
          <div>#</div>
          <div>-</div>
        </div>
        <button>Add to Cart!</button>
      </div>
    </div>
  );
}

export default Card;
