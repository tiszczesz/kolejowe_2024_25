using System;
using System.Globalization;
using MySql.Data.MySqlClient;

namespace cw3.Models;

public class MoviesRepo
{
    private readonly string? _connectionString;
    public MoviesRepo(IConfiguration configuration)
    {
        _connectionString = configuration.GetConnectionString("MysqlConnection");
    }
    public List<Movie> GetMovies()
    {
        var movies = new List<Movie>();
        using var connection = new MySqlConnection(_connectionString);
        MySqlCommand command = connection.CreateCommand();
        command.CommandText = "SELECT * FROM movies";
        connection.Open();
        using var reader = command.ExecuteReader();
        while (reader.Read())
        {
            movies.Add(new Movie
            {
                Id = reader.GetInt32("id"),
                Title = reader.GetString("title"),
                Director = reader.GetString("director"),
                Price = reader.GetDecimal("price"),
                GenreId = reader.GetInt32("genre_id")
            });
        }
        connection.Close();
        return movies;
    }
    public void InsertMovie(Movie movie)
    {
        using var connection = new MySqlConnection(_connectionString);
        MySqlCommand command = connection.CreateCommand();
        command.CommandText = "INSERT INTO movies (title, director, price, genre_id)"
                 + " VALUES (@title, @director, @price, @genre_id)";
        command.Parameters.AddWithValue("@title", movie.Title);
        command.Parameters.AddWithValue("@director", movie.Director);
        command.Parameters.AddWithValue("@price",
             movie.Price?.ToString(CultureInfo.InvariantCulture));
        command.Parameters.AddWithValue("@genre_id", movie.GenreId);
        connection.Open();
        command.ExecuteNonQuery();
        connection.Close();
    }
    public List<Genre> GetGenres()
    {
        var genres = new List<Genre>();
        using var connection = new MySqlConnection(_connectionString);
        MySqlCommand command = connection.CreateCommand();
        command.CommandText = "SELECT * FROM genres";
        connection.Open();
        using var reader = command.ExecuteReader();
        while (reader.Read())
        {
            genres.Add(new Genre
            {
                Id = reader.GetInt32("id"),
                Name = reader.GetString("name"),
                Description = reader.GetString("description")
            });
        }
        connection.Close();
        return genres;
    }

    public Movie? GetMovie(int id)
    {
        using var connection = new MySqlConnection(_connectionString);
        MySqlCommand command = connection.CreateCommand();
        command.CommandText = "SELECT * FROM movies WHERE id = @id";
        command.Parameters.AddWithValue("@id", id);
        connection.Open();
        using var reader = command.ExecuteReader();
        reader.Read();
        if (reader.HasRows)
        {
            return new Movie
            {
                Id = reader.GetInt32("id"),
                Title = reader.GetString("title"),
                Director = reader.GetString("director"),
                Price = reader.GetDecimal("price"),
                GenreId = reader.GetInt32("genre_id")
            };
        }
        return null;
    }

    public async Task DeleteMovie(int id)
    {
        using var connection = new MySqlConnection(_connectionString);
        MySqlCommand command = connection.CreateCommand();
        command.CommandText = "DELETE FROM movies WHERE id = @id";
        command.Parameters.AddWithValue("@id", id);
        connection.Open();
        await command.ExecuteNonQueryAsync();
        connection.Close();
    }

    public void EditMovie(Movie movie)
    {
        using var connection = new MySqlConnection(_connectionString);
        MySqlCommand command = connection.CreateCommand();
        command.CommandText = "UPDATE movies SET " +
        "title = @title, director = @director, price = @price, genre_id = @genre_id " +
        "WHERE id = @id";
        command.Parameters.AddWithValue("@title", movie.Title);
        command.Parameters.AddWithValue("@director", movie.Director);
        command.Parameters.AddWithValue("@price",
             movie.Price?.ToString(CultureInfo.InvariantCulture));
        command.Parameters.AddWithValue("@genre_id", movie.GenreId);
        command.Parameters.AddWithValue("@id", movie.Id);
        connection.Open();
        command.ExecuteNonQuery();
        connection.Close();
    }
}
