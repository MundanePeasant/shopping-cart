import './Card.css';
import './assets/fonts/fonts.css';

function Card({ pokemon }) {
  const { name, imageURL, weight, baseStats } = pokemon;

  return (
    <div className="card">
      <img src={imageURL} alt={name} />
      <div className="row-one">
        <h2>{name.toUpperCase()}</h2>
        <div className="card-sub-info">
          <p>{baseStats}</p>
          <p>{weight}</p>
        </div>
      </div>
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
