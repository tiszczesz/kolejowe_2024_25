using System;

namespace cw2.Models;

public class ProductsRepo
{
    private string? _connectionString;
    public ProductsRepo(IConfiguration configuration)
    {
        _connectionString = configuration.GetConnectionString("Mysql");
    }
}
