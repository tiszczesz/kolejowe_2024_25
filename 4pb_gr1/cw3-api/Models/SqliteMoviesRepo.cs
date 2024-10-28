using System;
using System.Data;
using Microsoft.Data.Sqlite;

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
        using SqliteConnection connection = new SqliteConnection(_connectionString);
        var command = connection.CreateCommand();
        command.CommandText = "INSERT INTO Movies (title, Director, releaseYear, genre)"
         +" VALUES (@Title, @Director, @ReleaseYear, @Genre)";
        command.Parameters.AddWithValue("@Title", movie.Title);
        command.Parameters.AddWithValue("@Director", movie.Director);
        command.Parameters.AddWithValue("@ReleaseYear", movie.ReleaseYear);
        command.Parameters.AddWithValue("@Genre", movie.Genre);
        connection.Open();
        command.ExecuteNonQuery();
        connection.Close();
    }

    public void DeleteMovie(int id)
    {
        throw new NotImplementedException();
    }

    public Movie? GetMovieById(int id)
    {
        using SqliteConnection connection = new SqliteConnection(_connectionString);
        var command = connection.CreateCommand();
        command.CommandText = "SELECT * FROM Movies WHERE id = @Id";
        command.Parameters.AddWithValue("@Id", id);
        connection.Open();
        using var reader = command.ExecuteReader();
        reader.Read();
        Movie? movie = null;
        if(reader.HasRows){
            movie = new Movie{
                Id = reader.GetInt32("id"),
                Title = reader.GetString("title"),
                Director = reader.GetString("director"),
                ReleaseYear = reader.GetInt32("releaseYear"),
                Genre = reader.GetString("genre")
            };
        }
        connection.Close();
        return movie;
    }

    public List<Movie> GetMovies()
    {
        List<Movie> movies = new List<Movie>();
        //utworzyc SqliteConnection
        using var connection = new SqliteConnection(_connectionString);
        //utworzyc SqliteCommand
        var command = connection.CreateCommand();
        command.CommandText = "SELECT * FROM Movies";
        //otworzyc polaczenie
        connection.Open();
        //utworzyc SqliteDataReader
        using var reader = command.ExecuteReader();
        //utworzyc petle while i dodawac filmy do listy
        while(reader.Read()){
            movies.Add(new Movie{
                Id = reader.GetInt32("id"),
                Title = reader.GetString("title"),
                Director = reader.GetString("director"),
                ReleaseYear = reader.GetInt32("releaseYear"),
                Genre = reader.GetString("genre")
            });
        }
        //zamknac polaczenie
        connection.Close();
        return movies;
    }

    public void UpdateMovie(Movie movie)
    {
        throw new NotImplementedException();
    }
}
