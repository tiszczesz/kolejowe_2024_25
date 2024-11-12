using System;
using System.Globalization;
using Microsoft.Data.Sqlite;
namespace cw1.Models;

public class BooksRepo
{
    private string? _connectionString;
    public BooksRepo(IConfiguration configuration)
    {
        _connectionString = configuration.GetConnectionString("sqlite");
    }
    public static List<Book> GetBooksList()
    {
        return new List<Book>()
        {
            new Book(){Id=1,Title="C#",Author="John",Price=99.99m},
            new Book(){Id=2,Title="Java",Author="Mike",Price=79.99m},
            new Book(){Id=3,Title="Python",Author="Ann",Price=49.99m},
            new Book(){Id=4,Title="JavaScript",Author="Bob",Price=39.99m},
            new Book(){Id=5,Title="C++",Author="David",Price=29.99m},
        };
    }
    public List<Book> GetBooksListFromDb()
    {
        var books = new List<Book>();
        using (SqliteConnection conn = new SqliteConnection(_connectionString))
        {
            SqliteCommand cmd = conn.CreateCommand();
            cmd.CommandText = "SELECT * FROM Books";
            conn.Open();
            SqliteDataReader reader = cmd.ExecuteReader();

            while (reader.Read())
            {
                books.Add(new Book()
                {
                    Id = reader.GetInt32(0),
                    Title = reader.GetString(1),
                    Author = reader.GetString(2),
                    Price = reader.GetDecimal(3)
                }
                    );
            }
        }
        return books;
    }

    public void InsertBook(Book book)
    {
        using SqliteConnection conn = new SqliteConnection(_connectionString);
        SqliteCommand cmd = conn.CreateCommand();
        cmd.CommandText = $"INSERT INTO Books (Title, Author, Price)" +
        $" VALUES ('{book.Title}', '{book.Author}', {book.Price?.ToString(CultureInfo.InvariantCulture)})";
        conn.Open();
        cmd.ExecuteNonQuery();
        conn.Close();
    }

    public void DeleteBook(int? id)
    {
        using SqliteConnection conn = new SqliteConnection(_connectionString);
        SqliteCommand cmd = conn.CreateCommand();
        cmd.CommandText = $"DELETE FROM Books WHERE Id = {id}";
        conn.Open();
        cmd.ExecuteNonQuery();
        conn.Close();
    }

    public Book? GetBookById(int? id)
    {
        using SqliteConnection conn = new SqliteConnection(_connectionString);
        SqliteCommand cmd = conn.CreateCommand();
        cmd.CommandText = $"SELECT * FROM Books WHERE Id = {id}";
        conn.Open();
        SqliteDataReader reader = cmd.ExecuteReader();
        reader.Read();
        if(!reader.HasRows) return null;
        var result =  new Book()
        {
            Id = reader.GetInt32(0),
            Title = reader.GetString(1),
            Author = reader.GetString(2),
            Price = reader.GetDecimal(3)
        };
        conn.Close();
        return result;
    }

    public void UpdateBook(Book book)
    {
        using SqliteConnection conn = new SqliteConnection(_connectionString);
        SqliteCommand cmd = conn.CreateCommand();
        // cmd.CommandText = $"UPDATE Books SET Title = '{book.Title}',"
        //     +$" Author = '{book.Author}',"+
        //  $" Price = {book.Price?.ToString(CultureInfo.InvariantCulture)} WHERE Id = {book.Id}";
        cmd.CommandText = $"UPDATE Books SET Title = @Title, Author = @Author, Price = @Price WHERE Id = @Id";
        cmd.Parameters.AddWithValue("@Title", book.Title);
        cmd.Parameters.AddWithValue("@Author", book.Author);
        cmd.Parameters.AddWithValue("@Price", book.Price?.ToString(CultureInfo.InvariantCulture));
        cmd.Parameters.AddWithValue("@Id", book.Id);
        conn.Open();
        cmd.ExecuteNonQuery();
        conn.Close();
    }
    
}
