using System;
using Microsoft.Data.Sqlite;
namespace cw8_sqlite.Models;

public class ProductsRepo
{
    private readonly string? _connString;
    public ProductsRepo()
    {
        _connString = "Data Source=ProductsDb.db";
    }
    public List<Product> GetProducts()
    {
        List<Product> products = new();
        using SqliteConnection connection = new(_connString);
        SqliteCommand command = connection.CreateCommand();
        command.CommandText = "SELECT * FROM products";
        connection.Open();
        using SqliteDataReader reader = command.ExecuteReader();
        while(reader.Read())
        {
            products.Add(
                new Product{
                    Id = reader.GetInt32(0),
                    Name = reader.GetString(1),
                    Price = reader.GetDecimal(2),
                    Type = reader.GetString(3)
                }
            );
        }

        return products;
    }
}
