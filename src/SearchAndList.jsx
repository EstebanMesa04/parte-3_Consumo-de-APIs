import { useState } from "react";
import BreedCard from "./BreedCard";
import DetailsB from "./DetailsB";
import "./SearchAndList.css";

function SearchAndList({ data, loading, error }) {
  const [searchText, setSearchText] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const firlter = () => {
    if (searchText === "") {
      return data;
    } else {
      return data.filter((d) => d.name.toLowerCase().startsWith(searchText));
    }
  };

  return (
    <>
      <div className="barra">
        <h1 className="titulo">dog breed finder</h1>
        <input
          className="buscador"
          type="text"
          name="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
      </div>
      <div className="contenedor-general">
        <ul className="resultados">
          {error && <li>Error: {error}</li>}
          {loading && <li>loading...</li>}
          {firlter()?.map((d) => (
            <BreedCard
              key={d.id}
              data={d}
              actionButon={() => {
                setSelectedId(d.id);
              }}
            />
          ))}
        </ul>
        {selectedId && <DetailsB key={selectedId} id={selectedId} />}
      </div>
    </>
  );
}

export default SearchAndList;
