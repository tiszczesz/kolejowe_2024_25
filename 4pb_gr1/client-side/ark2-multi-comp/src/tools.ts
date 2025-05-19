export type Movie = {
    id: number;
    title: string;
    genre: string;    
}
export const getLastId = (movies: Movie[]): number => {
    if (movies.length === 0) {
        return 1;
    }
    const lastMovieId = Math.max(...movies.map(movie => movie.id));
    return lastMovieId + 1;
}
