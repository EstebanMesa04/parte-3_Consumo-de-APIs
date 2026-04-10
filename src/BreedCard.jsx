import "./BreedCard.css";

function BreedCard({ data, actionButon }) {
  return (
    <li className="card">
      <h4>{data.name}</h4>
      <button
        onClick={() => {
          actionButon();
        }}
      >
        show details
      </button>
    </li>
  );
}

export default BreedCard;
