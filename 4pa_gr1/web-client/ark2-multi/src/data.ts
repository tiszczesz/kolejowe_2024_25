export type Movie = {
    id: number;
    title: string;
    genre: string;
}
export const genres = [
    "Komedia","Obyczajowy","Sensacyjny","Horror"
];
export const generId = (movies: Movie[]): number => {
    if(movies.length === 0) return 1;
    const ids = movies.map(movie => movie.id);
    const maxId = Math.max(...ids);
    return maxId + 1;
}