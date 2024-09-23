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
        using SqliteConnection conn = new SqliteConnection(_connString);
        SqliteCommand command = conn.CreateCommand();
        command.CommandText = $"INSERT INTO Movies(Title, Director, Year)" +
            $" VALUES('{movie.Title}', '{movie.Director}', {movie.Year})";
        conn.Open();
        command.ExecuteNonQuery();
        conn.Close();
    }

    public void DeleteMovieFromDB(int id)
    {
        using SqliteConnection conn = new SqliteConnection(_connString);
        SqliteCommand command = conn.CreateCommand();
        command.CommandText = $"DELETE FROM Movies WHERE Id = {id}";
        conn.Open();
        command.ExecuteNonQuery(); //realizacja zapytania sql na DB
        conn.Close();
    }

    public Movie GetMovieById(int id)
    {
        using SqliteConnection conn = new SqliteConnection(_connString);        
        SqliteCommand command = conn.CreateCommand();
        command.CommandText = "SELECT * FROM Movies WHERE Id = " + id;
        conn.Open();
        SqliteDataReader rd = command.ExecuteReader();
        rd.Read();
        Movie movie = new Movie{
            Id = -1,
            Title = rd.GetString(1),
            Director = rd.GetString(2),
            Year = rd.GetInt32(3)
        };
        conn.Close();
        return movie;
    }

    public void UpdateMovie(Movie movieToUpdate)
    {
        using SqliteConnection conn = new SqliteConnection(_connString);
        SqliteCommand command = conn.CreateCommand();
        command.CommandText = 
        $"UPDATE Movies SET Title = @Title, Director = @Director, Year = @Year WHERE Id = @Id";
        command.Parameters.AddWithValue("@Title", movieToUpdate.Title);
        command.Parameters.AddWithValue("@Director", movieToUpdate.Director);
        command.Parameters.AddWithValue("@Year", movieToUpdate.Year);
        command.Parameters.AddWithValue("@Id", movieToUpdate.Id);
        conn.Open();
        command.ExecuteNonQuery();
        conn.Close();
    }
}
