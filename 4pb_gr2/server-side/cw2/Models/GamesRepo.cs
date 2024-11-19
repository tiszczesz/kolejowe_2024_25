using System;
using System.Globalization;
using MySql.Data.MySqlClient;
namespace cw2.Models;

public class GamesRepo
{
    private readonly string? _connectionString;
    public GamesRepo(IConfiguration configuration)
    {
        _connectionString = configuration.GetConnectionString("MysqlConnection");
    }

    public List<Game> GetGames()
    {
        List<Game> games = new List<Game>();
        using MySqlConnection connection = new MySqlConnection(_connectionString);
        MySqlCommand command = connection.CreateCommand();
        command.CommandText = "SELECT * FROM Games";
        connection.Open();
        using MySqlDataReader reader = command.ExecuteReader();
        while (reader.Read())
        {
            games.Add(new Game
            {
                Id = reader.GetInt32("id"),
                Title = reader.GetString("title"),
                GenreId = reader.GetInt32("genre_id"),
                Price = reader.GetDecimal("price"),
                Description = reader.GetString("description")
            });
        }
        connection.Close();
        return games;
    }
    public List<Genre> GetGenres()
    {
        List<Genre> genres = new List<Genre>();
        using MySqlConnection connection = new MySqlConnection(_connectionString);
        MySqlCommand command = connection.CreateCommand();
        command.CommandText = "SELECT * FROM Genres";
        connection.Open();
        using MySqlDataReader reader = command.ExecuteReader();
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

    public void AddGame(Game game)
    {
        using MySqlConnection connection = new MySqlConnection(_connectionString);
        MySqlCommand command = connection.CreateCommand();
        command.CommandText = "INSERT INTO Games (title, genre_id, price, description)"
            +" VALUES (@title, @genre_id, @price, @description)";
        command.Parameters.AddWithValue("@title", game.Title);
        command.Parameters.AddWithValue("@genre_id", game.GenreId);
        command.Parameters.AddWithValue("@price", game.Price?.ToString(CultureInfo.InvariantCulture));
        command.Parameters.AddWithValue("@description", game.Description);
        connection.Open();
        command.ExecuteNonQuery();
        connection.Close();
    }

    public void DeleteGame(int id)
    {
        using MySqlConnection connection = new MySqlConnection(_connectionString);
        MySqlCommand command = connection.CreateCommand();
        command.CommandText = "DELETE FROM Games WHERE id = @id";
        command.Parameters.AddWithValue("@id", id);
        connection.Open();
        command.ExecuteNonQuery();
        connection.Close();
    }

    public Game? GetGame(int id)
    {
        using MySqlConnection connection = new MySqlConnection(_connectionString);
        MySqlCommand command = connection.CreateCommand();
        command.CommandText = "SELECT * FROM Games WHERE id = @id";
        command.Parameters.AddWithValue("@id", id);
        connection.Open();
        using MySqlDataReader reader = command.ExecuteReader();
        reader.Read();
        if(reader.HasRows)
        {
            return new Game
            {
                Id = reader.GetInt32("id"),
                Title = reader.GetString("title"),
                GenreId = reader.GetInt32("genre_id"),
                Price = reader.GetDecimal("price"),
                Description = reader.GetString("description")
            };
        }
        return null;
    }

    public void EditGame(Game game)
    {
        using MySqlConnection connection = new MySqlConnection(_connectionString);
        MySqlCommand command = connection.CreateCommand();
        command.CommandText = "UPDATE Games SET title = @title, genre_id = @genre_id,"+
                   " price = @price, description = @description"
            +" WHERE id = @id";
        command.Parameters.AddWithValue("@title", game.Title);
        command.Parameters.AddWithValue("@genre_id", game.GenreId);
        command.Parameters.AddWithValue("@price", game.Price?.ToString(CultureInfo.InvariantCulture));
        command.Parameters.AddWithValue("@description", game.Description);
        command.Parameters.AddWithValue("@id", game.Id);
        connection.Open();
        command.ExecuteNonQuery();
        connection.Close();
    }
}
