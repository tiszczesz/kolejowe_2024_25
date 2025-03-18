export type Game = {
  id: number;
  title: string;
  genre: string;
  price: number;
  year: number;
};
export const getLastId = (data: Game[]): number => {
  let lastId: number = 0;
  data.forEach((game: Game) => {
    if (game.id > lastId) {
      lastId = game.id;
    }
  });
  return lastId;
};
export const games: Game[] = [
  {
    id: 1,
    title: "The Witcher 3: Wild Hunt",
    genre: "RPG",
    price: 29.99,
    year: 2015,
  },
  {
    id: 2,
    title: "Cyberpunk 2077",
    genre: "RPG",
    price: 59.99,
    year: 2020,
  },
  {
    id: 3,
    title: "Minecraft",
    genre: "Sandbox",
    price: 26.95,
    year: 2011,
  },
  {
    id: 4,
    title: "Grand Theft Auto V",
    genre: "Action",
    price: 29.99,
    year: 2013,
  },
  {
    id: 5,
    title: "Fortnite",
    genre: "Battle Royale",
    price: 0,
    year: 2017,
  },
  {
    id: 6,
    title: "Among Us",
    genre: "Party",
    price: 4.99,
    year: 2018,
  },
  {
    id: 7,
    title: "The Legend of Zelda: Breath of the Wild",
    genre: "Action-adventure",
    price: 59.99,
    year: 2017,
  },
  {
    id: 8,
    title: "Red Dead Redemption 2",
    genre: "Action-adventure",
    price: 59.99,
    year: 2018,
  },
  {
    id: 9,
    title: "Overwatch",
    genre: "First-person shooter",
    price: 39.99,
    year: 2016,
  },
  {
    id: 10,
    title: "Stardew Valley",
    genre: "Simulation",
    price: 14.99,
    year: 2016,
  },
];
