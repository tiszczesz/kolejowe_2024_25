1. Zainstalować  json-server
   
```console
   npm i json-srver
```

2. Utworzyć plik d.json w src
   
```json
{
  "movies": [
    {
      "id": 1,
      "title": "Inception",
      "director": "Christopher Nolan",
      "releaseYear": 2010,
      "genre": "Sci-Fi"
    },
    {
      "id": 2,
      "title": "The Godfather",
      "director": "Francis Ford Coppola",
      "releaseYear": 1972,
      "genre": "Crime"
    },
    {
      "id": 3,
      "title": "The Dark Knight",
      "director": "Christopher Nolan",
      "releaseYear": 2008,
      "genre": "Action"
    },
    {
      "id": 4,
      "title": "Pulp Fiction",
      "director": "Quentin Tarantino",
      "releaseYear": 1994,
      "genre": "Drama"
    },
    {
      "id": 5,
      "title": "Forrest Gump",
      "director": "Robert Zemeckis",
      "releaseYear": 1994,
      "genre": "Drama"
    },
    {
      "id": 6,
      "title": "The Matrix",
      "director": "Lana Wachowski, Lilly Wachowski",
      "releaseYear": 1999,
      "genre": "Sci-Fi"
    },
    {
      "id": 7,
      "title": "The Shawshank Redemption",
      "director": "Frank Darabont",
      "releaseYear": 1994,
      "genre": "Drama"
    },
    {
      "id": 8,
      "title": "Fight Club",
      "director": "David Fincher",
      "releaseYear": 1999,
      "genre": "Drama"
    },
    {
      "id": 9,
      "title": "The Lord of the Rings: The Return of the King",
      "director": "Peter Jackson",
      "releaseYear": 2003,
      "genre": "Fantasy"
    },
    {
      "id": 10,
      "title": "Interstellar",
      "director": "Christopher Nolan",
      "releaseYear": 2014,
      "genre": "Sci-Fi"
    }
  ]
}

```

3. uruchomić server-json
```console
json-server --watch src/db.json --port 3200
