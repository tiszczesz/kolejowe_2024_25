export type Movie = {
    id: number
    title: string
    release_year: string
    price: number
}
export const getLastId = (movies: Movie[]): number => {
    return movies.length > 0 ? Math.max(...movies.map(movie => movie.id)) : 0
}
export const movies: Movie[] = [
    {
        id: 1,
        title: "Inception",
        release_year: "2010",
        price: 12.99
    },
    {
        id: 2,
        title: "The Matrix",
        release_year: "1999",
        price: 9.99
    },
    {
        id: 3,
        title: "Interstellar",
        release_year: "2014",
        price: 14.99
    },
    {
        id: 4,
        title: "The Dark Knight",
        release_year: "2008",
        price: 11.99
    },
    {
        id: 5,
        title: "Fight Club",
        release_year: "1999",
        price: 8.99
    },
    {
        id: 6,
        title: "Pulp Fiction",
        release_year: "1994",
        price: 10.99
    },
    {
        id: 7,
        title: "Forrest Gump",
        release_year: "1994",
        price: 7.99
    },
    {
        id: 8,
        title: "The Shawshank Redemption",
        release_year: "1994",
        price: 9.99
    },
    {
        id: 9,
        title: "The Godfather",
        release_year: "1972",
        price: 12.99
    },
    {
        id: 10,
        title: "The Lord of the Rings: The Fellowship of the Ring",
        release_year: "2001",
        price: 13.99
    }
];