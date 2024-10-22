using System;
using System.Data;
using Microsoft.Data.Sqlite;

namespace cw4_api.Models;

public class SqliteGamesRepo : IGameRepo
{
    private readonly string? _connString;
    public SqliteGamesRepo(IConfiguration config)
    {
        _connString = config.GetConnectionString("Sqlite");
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
        using SqliteConnection conn = new SqliteConnection(_connString);
        SqliteCommand cmd = conn.CreateCommand();
        cmd.CommandText = "SELECT * FROM Games WHERE id = @id";
        cmd.Parameters.AddWithValue("@id", id);
        conn.Open();
        using SqliteDataReader reader = cmd.ExecuteReader();
        if(!reader.HasRows) return null;
        reader.Read();
        Game game = new Game
        {
            Id = reader.GetInt32("id"),
            Title = reader.GetString("title"),
            Genre = reader.GetString("genre"),
            ReleaseDate = DateOnly.
                FromDateTime(reader.GetDateTime("releaseDate")),
            Price = reader.GetDecimal("price")
        };
        conn.Close();
        return game;
    }

    public List<Game> GetGames()
    {
        List<Game> games = new List<Game>();
        using SqliteConnection conn = new SqliteConnection(_connString);
        //SqliteCommand cmd = new SqliteCommand("",conn);
        SqliteCommand cmd = conn.CreateCommand();
        cmd.CommandText = "SELECT * FROM Games";
        conn.Open();
        using SqliteDataReader reader = cmd.ExecuteReader();
        while (reader.Read())
        {
            games.Add(new Game
            {
                Id = reader.GetInt32("id"),
                Title = reader.GetString("title"),
                Genre = reader.GetString("genre"),
                ReleaseDate = DateOnly.
                    FromDateTime(reader.GetDateTime("releaseDate")),
                Price = reader.GetDecimal("price")
            });
        }
        conn.Close();
        return games;
    }

    public void UpdateGame(Game game)
    {
        throw new NotImplementedException();
    }
}
