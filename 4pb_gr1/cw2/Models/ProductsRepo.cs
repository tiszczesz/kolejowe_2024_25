using System;
using System.Globalization;
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

    public void AddProduct(Product product)
    {
        using var connection = new MySqlConnection(_connectionString);
        MySqlCommand command = connection.CreateCommand();
        command.CommandText = "INSERT INTO products (name, description, price, genre_id) "+
           "VALUES (@name, @description, @price, @genre_id)";
        command.Parameters.AddWithValue("@name", product.Name);
        command.Parameters.AddWithValue("@description", product.Description);
        command.Parameters.AddWithValue("@price",
                product.Price?.ToString(CultureInfo.InvariantCulture));
        command.Parameters.AddWithValue("@genre_id", product.GenreId);
        connection.Open();
        command.ExecuteNonQuery();
        connection.Close();
        
    }

    public async Task DeleteProduct(int id)
    {
        using MySqlConnection connection = new MySqlConnection(_connectionString);
        MySqlCommand command = connection.CreateCommand();
        command.CommandText = "DELETE FROM products WHERE id = @id";
        command.Parameters.AddWithValue("@id", id);
        connection.Open();
        await command.ExecuteNonQueryAsync();
        connection.Close();
    }

    internal Product? GetProduct(int id)
    {
        using MySqlConnection connection = new MySqlConnection(_connectionString);
        MySqlCommand command = connection.CreateCommand();
        command.CommandText = "SELECT * FROM products WHERE id = @id";
        command.Parameters.AddWithValue("@id", id);
        connection.Open();
        MySqlDataReader reader = command.ExecuteReader();
        reader.Read();
        Product? result;
        if(reader.HasRows)
        {
            result = new Product();
            result.Id = reader.GetInt32("id");
            result.Name = reader.GetString("name");
            result.Description = reader.GetString("description");
            result.Price = reader.GetDecimal("price");
            result.GenreId = reader.GetInt32("genre_id");            
        }else{
            result = null;
        }
        connection.Close();
        return result;
    }
}
