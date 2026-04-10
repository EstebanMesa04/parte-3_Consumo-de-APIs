import { useFetch } from "./hooks/useFetch";
import "./DetailsB.css";

function DetailsB({ id }) {
  const headers = new Headers({
    "Content-Type": "application/json",
    "x-api-key": "DEMO-API-KEY",
  });

  const requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };

  const { data, loading, error } = useFetch(
    `https://api.thedogapi.com/v1/breeds/${id}`,
    requestOptions,
  );

  const info = () => (
    <>
      <img className="img" src={data.image.url} />
      <h3>{data.name}</h3>
      <ul className="lista">
        <li>life span: {data.life_span}</li>
        <li>origin: {data.origin}</li>
        <li>temperament: {data.temperament}</li>
        <li>weight: {data.weight.metric} cm</li>
        <li>height: {data.height.metric} cm</li>
      </ul>
    </>
  );

  return (
    <div className="detalle">
      {error && <li>Error: {error}</li>}
      {loading && <li>loading...</li>}
      {data && info()}
    </div>
  );
}

export default DetailsB;
