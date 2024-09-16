using System;
using Microsoft.Data.Sqlite;

namespace cw1.Models;

public class MoviesRepo
{
    private string? _connString;
    public MoviesRepo(IConfiguration configuration)
    {
        _connString = configuration.GetConnectionString("sqlite");
    }
    public List<Movie> GetMovies()
    {
        var movies = new List<Movie>();
        using (SqliteConnection conn = new SqliteConnection(_connString))
        {
            SqliteCommand command = conn.CreateCommand();
            command.CommandText = "SELECT * FROM Movies";
            conn.Open();
            SqliteDataReader rd = command.ExecuteReader();
            while (rd.Read())
            {
                movies.Add(new Movie
                {
                    Id = rd.GetInt32(0),
                    Title = rd.GetString(1),
                    Director = rd.GetString(2),
                    Year = rd.GetInt32(3)
                });
            }
        }
        return movies;
    }

    public void AddMovie(Movie movie)
    {
        using (SqliteConnection conn = new SqliteConnection(_connString))
        {
            SqliteCommand command = conn.CreateCommand();
            command.CommandText = $"INSERT INTO Movies(Title, Director, Year)" +
                $" VALUES('{movie.Title}', '{movie.Director}', {movie.Year})";
            conn.Open();
            command.ExecuteNonQuery();
            conn.Close();
        }
    }
}
