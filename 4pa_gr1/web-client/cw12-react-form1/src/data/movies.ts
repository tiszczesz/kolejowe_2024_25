export type Movie = {
  id: number;
  title: string;
  category: string;
  year: number;
};
export const getLastId = (movies: Movie[]): number => {
    let maxId = 0;
    movies.forEach((m) => {
      if (m.id > maxId) {
        maxId = m.id;
      }
    });
    return maxId;
}

export const movies: Movie[] = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    category: "Drama",
    year: 1994,
  },
  {
    id: 2,
    title: "The Godfather",
    category: "Crime",
    year: 1972,
  },
  {
    id: 3,
    title: "The Dark Knight",
    category: "Action",
    year: 2008,
  },
  {
    id: 4,
    title: "Pulp Fiction",
    category: "Crime",
    year: 1994,
  },
  {
    id: 5,
    title: "Forrest Gump",
    category: "Drama",
    year: 1994,
  },
  {
    id: 6,
    title: "Inception",
    category: "Sci-Fi",
    year: 2010,
  },
  {
    id: 7,
    title: "Fight Club",
    category: "Drama",
    year: 1999,
  },
  {
    id: 8,
    title: "The Matrix",
    category: "Sci-Fi",
    year: 1999,
  },
  {
    id: 9,
    title: "The Lord of the Rings: The Return of the King",
    category: "Fantasy",
    year: 2003,
  },
  {
    id: 10,
    title: "Star Wars: Episode V - The Empire Strikes Back",
    category: "Sci-Fi",
    year: 1980,
  },
];
