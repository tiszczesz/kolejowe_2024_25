using System;
using Microsoft.Data.Sqlite;

namespace cw1.Models;

public class BooksRepo
{
    private string connString="Data Source=books.db";

    public List<Book> GetBooks(){
        List<Book> books = new List<Book>();
        using var conn = new SqliteConnection(connString);
        using var cmd = conn.CreateCommand();
        cmd.CommandText = "SELECT * FROM books";
        conn.Open();
        using var reader = cmd.ExecuteReader();
        while (reader.Read()){
            books.Add(new Book{
                Id = reader.GetInt32(0),
                Title = reader.GetString(1),
                Author = reader.GetString(2),
                Price = reader.GetDecimal(3)
            });
        }
        conn.Close();
        return books;
    }
}

