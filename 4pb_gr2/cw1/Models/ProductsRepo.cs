using System;

namespace cw1.Models;

public class ProductsRepo
{
    private string? _connString;
    public ProductsRepo(IConfiguration configuration)
    {
        _connString = configuration.GetConnectionString("sqlite");
    }
    public List<Product> GetProducts(){
        var products = new List<Product>();

        return products;
    }
}
