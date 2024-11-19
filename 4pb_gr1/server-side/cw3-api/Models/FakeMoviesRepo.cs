using System;

namespace cw3_api.Models;

public class FakeMoviesRepo : IMoviesRepo
{
    public List<Movie> Movies { get; set; }
    public FakeMoviesRepo()
    {
        Movies = new List<Movie>
        {
            new Movie { Id = 1, Title = "The Shawshank Redemption", Director = "Frank Darabont", ReleaseYear = 1994, Genre = "Drama" },
            new Movie { Id = 2, Title = "The Godfather", Director = "Francis Ford Coppola", ReleaseYear = 1972, Genre = "Crime" },
            new Movie { Id = 3, Title = "The Dark Knight", Director = "Christopher Nolan", ReleaseYear = 2008, Genre = "Action" },
            new Movie { Id = 4, Title = "12 Angry", Director = "Sidney Lumet", ReleaseYear = 1957, Genre = "Drama" },
        };
    }
    public void AddMovie(Movie movie)
    {
        throw new NotImplementedException();
    }

    public void DeleteMovie(int id)
    {
        throw new NotImplementedException();
    }

    public Movie? GetMovieById(int id)
    {
        return Movies.FirstOrDefault(m => m.Id == id);
    }

    public List<Movie> GetMovies()
    {
        return Movies;
    }

    public void UpdateMovie(Movie movie)
    {
        throw new NotImplementedException();
    }
}
