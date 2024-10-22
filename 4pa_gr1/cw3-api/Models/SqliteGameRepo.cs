using System;
using System.Data;
using System.Globalization;
using Microsoft.Data.Sqlite;

namespace cw3_api.Models;

public class SqliteGameRepo : IGamesRepo
{
    private readonly string _connectionString;
    public SqliteGameRepo()
    {
        _connectionString = "Data Source=Games.db";
    }
    public void AddGame(Game game)
    {
        using var connection = new SqliteConnection(_connectionString);
        SqliteCommand command = connection.CreateCommand();
        command.CommandText = "INSERT INTO games (title, genre, editDate, price)"+
            " VALUES (@title, @genre, @editDate, @price)";
        command.Parameters.AddWithValue("@title", game.Title);
        command.Parameters.AddWithValue("@genre", game.Genre);
        command.Parameters.AddWithValue("@editDate", 
               game.EditDate.ToString("yyyy-MM-dd"));
        command.Parameters.AddWithValue("@price", game.Price?
              .ToString(CultureInfo.InvariantCulture));
        connection.Open();
        command.ExecuteNonQuery();
        connection.Close();
    }

    public void DeleteGame(int id)
    {
        using var connection = new SqliteConnection(_connectionString);
        SqliteCommand command = connection.CreateCommand();
        command.CommandText = "DELETE FROM games WHERE id = @id";
        command.Parameters.AddWithValue("@id", id);
        connection.Open();
        command.ExecuteNonQuery();
        connection.Close();        
    }

    public Game? GetGameById(int id)
    {
        using var connection = new SqliteConnection(_connectionString);
        SqliteCommand command = connection.CreateCommand();
        command.CommandText = "SELECT * FROM games WHERE id = @id";
        command.Parameters.AddWithValue("@id", id);
        connection.Open();
        SqliteDataReader reader = command.ExecuteReader();
        Game? game = null;
        if (reader.HasRows)  {
            reader.Read();
            game = new Game
            {
                Id = reader.GetInt32("id"),
                Title = reader.GetString("title"),
                Genre = reader.GetString("genre"),
                EditDate = DateOnly.FromDateTime(reader.GetDateTime("editDate")),
                Price = reader.GetDecimal("price")
            };
        }
        connection.Close();
        return game;
    }

    public List<Game>? GetGames()
    {
        List<Game> games = new List<Game>();
        using var connection = new SqliteConnection(_connectionString);
        SqliteCommand command = connection.CreateCommand();
        command.CommandText = "SELECT * FROM games";
        connection.Open();
        SqliteDataReader reader = command.ExecuteReader();
        while (reader.Read())
        {
            games.Add(new Game
            {
                Id = reader.GetInt32("id"),
                Title = reader.GetString("title"),
                Genre = reader.GetString("genre"),
                EditDate = DateOnly.FromDateTime(reader.GetDateTime("editDate")),
                Price = reader.GetDecimal("price")
            });
        }
        connection.Close();
        return games;
    }

    public void UpdateGame(Game game)
    {
        using var connection = new SqliteConnection(_connectionString);
        SqliteCommand command = connection.CreateCommand();
        command.CommandText = "UPDATE games SET title = @title, genre = @genre, "+
            "editDate = @editDate, price = @price WHERE id = @id";
        command.Parameters.AddWithValue("@title", game.Title);
        command.Parameters.AddWithValue("@genre", game.Genre);
        command.Parameters.AddWithValue("@editDate", 
               game.EditDate.ToString("yyyy-MM-dd"));
        command.Parameters.AddWithValue("@price", game.Price?
        .ToString(CultureInfo.InvariantCulture));
        command.Parameters.AddWithValue("@id", game.Id);
        connection.Open();
        command.ExecuteNonQuery();
        connection.Close();
        
    }
}
