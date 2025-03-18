import { useState } from "react";
import { games, getLastId, type Game } from "../data/games";

const GamesList = () => {
  const [gamesList, setGamesList] = useState<Game[]>(games);
  const [title, setTitle] = useState<string>("");
  const [genre, setGenre] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [year, setYear] = useState<number>(0);
  function handleDelete(id: number): void {
    setGamesList(gamesList.filter((g) => g.id !== id));
  }

  function handleAddGame() {
    if (title === "" || genre === "" || price === 0 || year === 0) return;
    const newGame: Game = {
      id: getLastId(gamesList) + 1,
      title: title,
      genre: genre,
      price: price,
      year: year,
    };
    //utworzenie nowej tablicy zawierajacej aktualne gry z nową grą
    setGamesList([...gamesList, newGame]);
    setTitle("");
    setGenre("");
    setPrice(0);
    setYear(0);
  }

  return (
    <div>
      <div className="addGame">
        <h1>Dodaj nową grę</h1>
        <div className="row m-2">
          <label className="col-3 text-end" htmlFor="title">
            Podaj tytuł
          </label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="col-6"
            type="text"
            id="title"
          />
          {title}
        </div>
        <div className="row m-2">
          <label className="col-3 text-end" htmlFor="genre">
            Podaj rodzaj
          </label>
          <input
            onChange={(e) => setGenre(e.target.value)}
            value={genre}
            className="col-6"
            type="text"
            id="genre"
          />
          {genre}
        </div>
        <div className="row m-2">
          <label className="col-3 text-end" htmlFor="price">
            Podaj cenę
          </label>
          <input
            onChange={(e) => setPrice(parseFloat(e.target.value))}
            value={price}
            className="col-6"
            type="number"
            id="price"
          />{" "}
          {price}
        </div>
        <div className="row m-2">
          <label className="col-3 text-end" htmlFor="year">
            Podaj rok wydania
          </label>
          <input
            onChange={(e) => setYear(parseInt(e.target.value))}
            value={year}
            className="col-6"
            type="number"
            id="year"
          />
          {year}
        </div>

        <button
          onClick={() => {
            handleAddGame();
          }}
          className="btn btn-primary offset-3 col-6"
        >
          Dodaj
        </button>
      </div>
      <div className="listGames">
        <h1>Lista gier ilość: {gamesList.length}</h1>
        <table className="table table-striped">
          <thead>
            <th>Lp</th>
            <th>Tytuł</th>
            <th>Rodzaj</th>
            <th>Cena</th>
            <th>Rok wydania</th>
            <th></th>
          </thead>
          <tbody>
            {gamesList.map((g, i) => (
              <tr key={g.id}>
                <td>{i + 1}</td>
                <td>{g.title}</td>
                <td>{g.genre}</td>
                <td>{g.price}</td>
                <td>{g.year}</td>
                <td>
                  <button
                    onClick={() => handleDelete(g.id)}
                    className="btn btn-danger"
                  >
                    Usuń
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GamesList;
