using System;
using MySql.Data.MySqlClient;

namespace makarony.Models;

public class RepoReservation
{
    private string? _connString;
    public RepoReservation(IConfiguration configuration)
    {
        _connString = configuration.GetConnectionString("mysql");
    }
    public void SaveToDb(Reservation reservation){
        using MySqlConnection conn = new MySqlConnection(_connString);
        using MySqlCommand command = conn.CreateCommand();
        command.CommandText = 
        "INSERT INTO rezerwacje (nr_stolika ,data_rez ,liczba_osob,telefon ) VALUES "+
        $"('{reservation.Place}','{reservation.Date}',{reservation.Count},'{reservation.Phone}')";
        conn.Open();
        command.ExecuteNonQuery();
        conn.Close();
    }

    public List<Reservation> GetAllReservations()
    {
        List<Reservation> reservations = new ();
        using MySqlConnection conn = new MySqlConnection(_connString);
        using MySqlCommand mySqlCommand= conn.CreateCommand();
        mySqlCommand.CommandText = "SELECT * FROM rezerwacje";
        conn.Open();
        using MySqlDataReader reader = mySqlCommand.ExecuteReader();
        while (reader.Read()){
            var reservation = new Reservation();
            reservation.Id = reader.GetInt32(0);
            reservation.Place = reader.GetInt32(1);
            var date = reader.GetDateTime(2);
            reservation.Date = date.Date.ToString("yyyy-MM-dd");
            reservation.Count = reader.GetInt32(3);
            reservation.Phone = reader.GetString(4);
            reservations.Add(reservation);
        }
        conn.Close();
        return reservations;
    }
}
