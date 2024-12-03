using cw8_sqlite.Models;

var repo = new ProductsRepo();
var products = repo.GetProducts();
foreach(var product in products)
{
    Console.WriteLine($"{product.Id}\t {product.Name}\t "
           + $" {product.Price}\t {product.Type}");
}
