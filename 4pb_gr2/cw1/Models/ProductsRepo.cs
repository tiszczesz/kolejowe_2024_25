using System;
using System.Globalization;
using Microsoft.Data.Sqlite;
namespace cw1.Models;

public class ProductsRepo
{
    private string? _connString;
    public ProductsRepo(IConfiguration configuration)
    {
        _connString = configuration.GetConnectionString("sqlite");
    }
    public List<Product> GetProducts()
    {
        var products = new List<Product>();
        using var conn = new SqliteConnection(_connString);
        SqliteCommand cmd = conn.CreateCommand();
        cmd.CommandText = "SELECT * FROM Products";
        conn.Open();
        SqliteDataReader reader = cmd.ExecuteReader();
        while (reader.Read())
        {
            products.Add(new Product
            {
                Id = reader.GetInt32(0),
                Name = reader.GetString(1),
                Category = reader.GetString(2),
                Price = reader.GetDecimal(3)
            });
        }
        return products;
    }

    public void AddProduct(Product product)
    {
        using var conn = new SqliteConnection(_connString);
        SqliteCommand cmd = conn.CreateCommand();
        // cmd.CommandText = $"INSERT INTO Products (Name, Category, Price) "
        // + $"VALUES ('{product.Name}', '{product.Category}', {product.Price?.ToString(CultureInfo.InvariantCulture)})";
        cmd.CommandText = "INSERT INTO Products (Name, Category, Price)"
               + " VALUES (@Name, @Category, @Price)";
        cmd.Parameters.AddWithValue("@Name", product.Name);
        cmd.Parameters.AddWithValue("@Category", product.Category);
        cmd.Parameters.AddWithValue("@Price", product.Price);
        conn.Open();
        cmd.ExecuteNonQuery();
        conn.Close();
    }

    public async Task DeleteProductFromDB(int id)
    {
        using var conn = new SqliteConnection(_connString);
        SqliteCommand cmd = conn.CreateCommand();
        cmd.CommandText = $"DELETE FROM Products WHERE Id = {id}";
        conn.Open();
        await cmd.ExecuteNonQueryAsync();
        conn.Close();
    }

    public async Task<Product?> GetProductById(int id)
    {
        using var conn = new SqliteConnection(_connString);
        SqliteCommand cmd = conn.CreateCommand();
        cmd.CommandText = $"SELECT * FROM Products WHERE Id = {id}";
        conn.Open();
        SqliteDataReader reader = await cmd.ExecuteReaderAsync();
        if(!reader.HasRows) return null;
        reader.Read();
        
        return new Product
        {
            Id = reader.GetInt32(0),
            Name = reader.GetString(1),
            Category = reader.GetString(2),
            Price = reader.GetDecimal(3)
        };
        
    }

    public  async Task EditProduct(Product product)
    {
        using var conn = new SqliteConnection(_connString);
        SqliteCommand cmd = conn.CreateCommand();
        cmd.CommandText = $"UPDATE Products SET Name = @Name, Category = @Category, Price = @Price WHERE Id = @Id";
        cmd.Parameters.AddWithValue("@Name", product.Name);
        cmd.Parameters.AddWithValue("@Category", product.Category);
        cmd.Parameters.AddWithValue("@Price", product.Price);
        cmd.Parameters.AddWithValue("@Id", product.Id);
        conn.Open();
        await cmd.ExecuteNonQueryAsync();
        conn.Close();
    }
}
