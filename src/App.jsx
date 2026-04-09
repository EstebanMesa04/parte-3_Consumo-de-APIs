import { useFetch } from "./hooks/useFetch";
import { useState } from "react";
import "./App.css";

function App() {
  const [searchText, setSearchText] = useState("");
  const { data, loading, error } = useFetch(
    "https://api.thedogapi.com/v1/breeds",
  );

  return (
    <div>
      <main>
        <h1>Buscador de razas de perros</h1>
        {console.log(data)}
        <ol>
          {error && <li>Error: {error}</li>}
          {loading && <li>loading...</li>}
          {data?.map((d) => {
            return <li key={d.id}>{d.name}</li>;
          })}
        </ol>
      </main>
    </div>
  );
}

export default App;
