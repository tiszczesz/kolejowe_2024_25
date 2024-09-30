using System;
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

}
