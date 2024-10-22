using System;
using System.Data;
using System.Globalization;
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
        using SqliteConnection conn = new SqliteConnection(_connString);
        SqliteCommand cmd = conn.CreateCommand();
        cmd.CommandText = "INSERT INTO Games (title,genre,releaseDate,price)" +
              " VALUES (@title,@genre,@releaseDate,@price)";
        cmd.Parameters.AddWithValue("@title", game.Title);
        cmd.Parameters.AddWithValue("@genre", game.Genre);
        cmd.Parameters.AddWithValue("@releaseDate",
               game.ReleaseDate.ToString("yyyy-MM-dd"));
        cmd.Parameters.AddWithValue("@price", game.Price?
                .ToString(CultureInfo.InvariantCulture));
        conn.Open();
        cmd.ExecuteNonQuery();
        conn.Close();
    }

    public void DeleteGame(int id)
    {
        using SqliteConnection conn = new SqliteConnection(_connString);
        SqliteCommand cmd = conn.CreateCommand();
        cmd.CommandText = "DELETE FROM Games WHERE id = @id";
        cmd.Parameters.AddWithValue("@id", id);
        conn.Open();
        cmd.ExecuteNonQuery();
        conn.Close();
    }

    public Game? GetGameById(int id)
    {
        using SqliteConnection conn = new SqliteConnection(_connString);
        SqliteCommand cmd = conn.CreateCommand();
        cmd.CommandText = "SELECT * FROM Games WHERE id = @id";
        cmd.Parameters.AddWithValue("@id", id);
        conn.Open();
        using SqliteDataReader reader = cmd.ExecuteReader();
        if (!reader.HasRows) return null;
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
        using SqliteConnection conn = new SqliteConnection(_connString);
        SqliteCommand cmd = conn.CreateCommand();
        cmd.CommandText = "UPDATE Games SET title = @title," +
              "genre = @genre,releaseDate = @releaseDate," +
              "price = @price WHERE id = @id";
        cmd.Parameters.AddWithValue("@title", game.Title);
        cmd.Parameters.AddWithValue("@genre", game.Genre);
        cmd.Parameters.AddWithValue("@releaseDate",
               game.ReleaseDate.ToString("yyyy-MM-dd"));
        cmd.Parameters.AddWithValue("@price", game.Price?
                .ToString(CultureInfo.InvariantCulture));
        cmd.Parameters.AddWithValue("@id", game.Id);
        conn.Open();
        cmd.ExecuteNonQuery();
        conn.Close();
    }
}
