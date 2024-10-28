using System;

namespace cw3_api.Models;

public class SqliteMoviesRepo : IMoviesRepo
{
    private readonly string? _connectionString;
    public SqliteMoviesRepo(IConfiguration configuration)
    {
        _connectionString = configuration.GetConnectionString("Sqlite");
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
        throw new NotImplementedException();
    }

    public List<Movie> GetMovies()
    {
        throw new NotImplementedException();
    }

    public void UpdateMovie(Movie movie)
    {
        throw new NotImplementedException();
    }
}
