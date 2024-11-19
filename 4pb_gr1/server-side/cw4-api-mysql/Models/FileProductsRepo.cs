using System;
using System.Text.Json;

namespace cw4_api_mysql.Models;

public class FileProductsRepo : IProductsRepo
{
    private readonly string _filePath;
    private List<Product>? _products;
    public FileProductsRepo(string filePath = "products.json")
    {
        _filePath = filePath;
        _products = File.Exists(_filePath) ? LoadProducts() : new List<Product>();
    }

    private List<Product>? LoadProducts()
    {
        string json = File.ReadAllText(_filePath);
        return JsonSerializer.Deserialize<List<Product>>(json);
    }
    public void SaveProducts()
    {
        string json = JsonSerializer.Serialize(_products,
                    new JsonSerializerOptions { WriteIndented = true });
        File.WriteAllText(_filePath, json);
    }

    public void AddProduct(Product produkt)
    {
        if (_products == null)
            _products = new List<Product>();
        produkt.Id = _products.Count > 0 ? _products.Max(p => p.Id) + 1 : 1;
        _products.Add(produkt);
        SaveProducts();
    }

    public void DeleteProduct(int id)
    {
        var toDelete = _products?.FirstOrDefault(p => p.Id == id);
        if (toDelete != null)
        {
            _products?.Remove(toDelete);
            SaveProducts();
        }
    }

    public Product? GetProductById(int id)
    {
        return _products?.FirstOrDefault(p => p.Id == id);
    }

    public IEnumerable<Product> GetProducts()
    {
        return _products ?? Enumerable.Empty<Product>();
    }

    public void UpdateProduct(Product produkt)
    {
        var toUpdate = _products?.FirstOrDefault(p => p.Id == produkt.Id);
        if (toUpdate != null)
        {
            toUpdate.Name = produkt.Name;
            toUpdate.Description = produkt.Description;
            toUpdate.Price = produkt.Price;
            SaveProducts();
        }
    }
}
