using System;
using MySql.Data.MySqlClient;

namespace ark1_rest.Models;

public class ReservationRepo
{
    private readonly string? _connectionString;
    public ReservationRepo(IConfiguration configuration)
    {
        _connectionString = configuration.GetConnectionString("MysqlConn");
    }
    public void InsertReservation(MyReservation reservation)
    {
        using var connection = new MySqlConnection(_connectionString);        
        using var command = connection.CreateCommand();
        command.CommandText = "INSERT INTO rezerwacje (nr_stolika, data_rez, liczba_osob, telefon)"+
        " VALUES (1, @date_res, @count, @phone)";
        command.Parameters.AddWithValue("@seat_id", reservation.SeatId);
        command.Parameters.AddWithValue("@date_res",reservation.DateRes?.ToString("yyyy-MM-dd"));
        command.Parameters.AddWithValue("@count", reservation.Count);
        command.Parameters.AddWithValue("@phone", reservation.Phone);
        connection.Open();
        command.ExecuteNonQuery();
        connection.Close();
    }
}
