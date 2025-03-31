import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MoviesList from "./components/MoviesList";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3200/movies");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        //console.log(data);
        return data;
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    const movies =   fetchData();
    console.log(movies);
  }, []);

  return (
    <>
      <MoviesList />
    </>
  );
}

export default App;
