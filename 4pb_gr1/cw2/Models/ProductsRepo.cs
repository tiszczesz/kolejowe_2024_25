using System;
using MySql.Data.MySqlClient;

namespace cw2.Models;

public class ProductsRepo
{
    private string? _connectionString;
    public ProductsRepo(IConfiguration configuration)
    {
        _connectionString = configuration.GetConnectionString("Mysql");
    }
    public List<Product> GetProducts()
    {
        List<Product> products = new List<Product>();
        using var connection = new MySqlConnection(_connectionString);
        MySqlCommand command = connection.CreateCommand();
        command.CommandText = "SELECT * FROM products";
        connection.Open();
        MySqlDataReader reader = command.ExecuteReader();
        while (reader.Read())
        {
            Product product = new Product();
            product.Id = reader.GetInt32("id");
            product.Name = reader.GetString("name");
            product.Description = reader.GetString("description");
            product.Price = reader.GetDecimal("price");
            product.GenreId = reader.GetInt32("genre_id");
            products.Add(product);
        }  
        connection.Close();
        return products;
    }

    public  List<Genre> GetGenres()
    {
        List<Genre> genres = new List<Genre>();
        using var connection = new MySqlConnection(_connectionString);
        MySqlCommand command = connection.CreateCommand();
        command.CommandText = "SELECT * FROM genres";
        connection.Open();
        MySqlDataReader reader = command.ExecuteReader();
        while (reader.Read())
        {
            Genre genre = new Genre();
            genre.Id = reader.GetInt32("id");
            genre.Name = reader.GetString("name");
            genres.Add(genre);
        }
        return genres;
    }
}
