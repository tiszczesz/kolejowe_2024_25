using System;
using System.Data;
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
        throw new NotImplementedException();
    }

    public void DeleteGame(int id)
    {
        throw new NotImplementedException();
    }

    public Game? GetGameById(int id)
    {
        throw new NotImplementedException();
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
        throw new NotImplementedException();
    }
}
