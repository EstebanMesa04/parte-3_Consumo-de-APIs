import { useFetch } from "./hooks/useFetch";
import SearchAndList from "./SearchAndList";
import "./App.css";

function App() {
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
    "https://api.thedogapi.com/v1/breeds",
    requestOptions,
  );

  return (
    <main className="App">
      <SearchAndList data={data} loading={loading} error={error} />
    </main>
  );
}

export default App;
