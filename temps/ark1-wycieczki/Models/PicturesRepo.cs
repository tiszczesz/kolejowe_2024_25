using System;
using MySql.Data.MySqlClient;

namespace ark1_wycieczki.Models;

public class PicturesRepo
{
    private readonly string? _connString;
    public PicturesRepo(IConfiguration configuration)
    {
        _connString = configuration.GetConnectionString("MysqlConn");
    }
    public List<Picture> GetPictures()
    {
        using var conn = new MySqlConnection(_connString);
        MySqlCommand cmd = conn.CreateCommand();
        cmd.CommandText = "SELECT * FROM zdjecia";
        conn.Open();
        using var reader = cmd.ExecuteReader();
        var pictures = new List<Picture>();
        while (reader.Read())
        {
            pictures.Add(new Picture
            {
                Id = reader.GetInt32(0),
                FileName = reader.GetString(1),
                Signature = reader.GetString(2)
            });
        }
        conn.Close();
        return pictures;
    }
    public List<Trip> GetTraps()
    {
        List<Trip> traps = new List<Trip>();
        using var conn = new MySqlConnection(_connString);
        MySqlCommand cmd = conn.CreateCommand();
       
        return traps;

    }
}

