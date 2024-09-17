using System;
using System.Globalization;
using Microsoft.Data.Sqlite;

namespace cw1.Models;

public class BooksRepo
{
    private string? connString;
    public BooksRepo(IConfiguration configuration)
    {
        connString = configuration.GetConnectionString("BooksDb");
    }
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

    public void AddBook(Book book)
    {
        using SqliteConnection conn = new SqliteConnection(connString);
        SqliteCommand cmd = conn.CreateCommand();
        // cmd.CommandText = "INSERT INTO books (title, author, price) VALUES "+
        // $" ('{book.Title}', '{book.Author}', {book.Price?.ToString(CultureInfo.InvariantCulture)})";
        cmd.CommandText = "INSERT INTO books (title, author, price) VALUES (@title, @author, @price)";
        cmd.Parameters.AddWithValue("@title", book.Title);
        cmd.Parameters.AddWithValue("@author", book.Author);
        cmd.Parameters.AddWithValue("@price", book.Price);
        conn.Open();
        cmd.ExecuteNonQuery();
        conn.Close();
    }

    public void DeleteBook(int id)
    {
        using SqliteConnection conn = new SqliteConnection(connString);
        SqliteCommand cmd = conn.CreateCommand();
        cmd.CommandText = $"DELETE FROM books WHERE id = {id}";
        conn.Open();
        cmd.ExecuteNonQuery();
        conn.Close();
    }
}

