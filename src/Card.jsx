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
          <p>{hp}</p>
          <p>{att}</p>
          <p>{def}</p>
          <p>{specAtt}</p>
          <p>{specDef}</p>
          <p>{speed}</p>
        </div>
      </div>
      <div className="row-two">
        <h2>{name.toUpperCase()}</h2>
        <h3>{baseStats + weight}</h3>
      </div>

      <div className="row-three">
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
