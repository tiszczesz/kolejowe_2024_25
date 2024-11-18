using System;

namespace cw4_api_mysql.Models;

public interface IProductsRepo
{
    IEnumerable<Product> GetProducts();
    Product? GetProductById(int id);
    void AddProduct(Product produkt);
    void UpdateProduct(Product produkt);
    void DeleteProduct(int id);

}
