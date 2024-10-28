using System;

namespace cw3_api.Models;

public interface IMoviesRepo
{
    List<Movie> GetMovies();
    Movie? GetMovieById(int id);
    void AddMovie(Movie movie);
    void UpdateMovie(Movie movie);
    void DeleteMovie(int id);
}
