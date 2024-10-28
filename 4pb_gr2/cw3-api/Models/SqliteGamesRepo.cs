using System;
using System.Data;
using Microsoft.Data.Sqlite;

namespace cw3_api.Models;

public class SqliteGamesRepo : IGameRepo
{
    private string? _connectionString;
    public SqliteGamesRepo(IConfiguration configuration)
    {
        _connectionString = configuration.GetConnectionString("Sqlite");
    }

    public void AddGame(Game game)
    {
        using SqliteConnection conn = new SqliteConnection(_connectionString);
        SqliteCommand command = conn.CreateCommand();
        command.CommandText = "INSERT INTO Games (title, genre, year, platform)"
              +" VALUES (@title, @genre, @year, @platform)";
        command.Parameters.AddWithValue("@title", game.Title);
        command.Parameters.AddWithValue("@genre", game.Genre);
        command.Parameters.AddWithValue("@year", game.Year);
        command.Parameters.AddWithValue("@platform", game.Platform);
        conn.Open();
        command.ExecuteNonQuery();
        conn.Close(); 
    }

    public void DeleteGame(int id)
    {
        using SqliteConnection connection = new SqliteConnection(_connectionString);
        SqliteCommand command = connection.CreateCommand();
      //  command.CommandText = $"DELETE FROM Games WHERE id = {id}";
        command.CommandText = "DELETE FROM Games WHERE id = @id";
        command.Parameters.AddWithValue("@id", id);
        connection.Open();
        command.ExecuteNonQuery();
        connection.Close();
    }

    public Game? GetGameById(int id)
    {
        using SqliteConnection connection = new SqliteConnection(_connectionString);
        SqliteCommand command = connection.CreateCommand();
        command.CommandText = "SELECT * FROM Games WHERE id = @id";
        command.Parameters.AddWithValue("@id", id);
        connection.Open();
        using SqliteDataReader reader = command.ExecuteReader();
        if (reader.Read())  //if(reader.HasRows)
        {
            return new Game
            {
                Id = reader.GetInt32("id"),
                Title = reader.GetString("title"),
                Genre = reader.GetString("genre"),
                Year = reader.GetInt32("year"),
                Platform = reader.GetString("platform")
            };
        }
        return null;
    }

    public List<Game> GetGames()
    {
        List<Game> games = new List<Game>();
        using SqliteConnection connection = new SqliteConnection(_connectionString);
        SqliteCommand command = connection.CreateCommand();
        command.CommandText = "SELECT * FROM Games";
        connection.Open();
        using SqliteDataReader reader = command.ExecuteReader();
        while (reader.Read())
        {
            games.Add(new Game
            {
                Id = reader.GetInt32("id"),
                Title = reader.GetString("title"),
                Genre = reader.GetString("genre"),
                Year = reader.GetInt32("year"),
                Platform = reader.GetString("platform")
            });
        }

        return games;
    }

    public void UpdateGame(Game game)
    {
        using SqliteConnection connection = new SqliteConnection(_connectionString);
        SqliteCommand command = connection.CreateCommand();
        command.CommandText = "UPDATE Games SET title = @title,"
         +" genre = @genre, year = @year, platform = @platform WHERE id = @id";
        command.Parameters.AddWithValue("@title", game.Title);
        command.Parameters.AddWithValue("@genre", game.Genre);
        command.Parameters.AddWithValue("@year", game.Year);
        command.Parameters.AddWithValue("@platform", game.Platform);
        command.Parameters.AddWithValue("@id", game.Id);
        //  command.CommandText = $"UPDATE Games SET title = {game.Title},"
        //  +$" genre = {game.Genre}, year = {game.Year}, platform = {game.Platform}"
        //  +$" WHERE id ={game.Id}";
        connection.Open();
        command.ExecuteNonQuery();
        connection.Close();
    }
}
