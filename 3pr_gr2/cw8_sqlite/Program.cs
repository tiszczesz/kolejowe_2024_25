using cw8_sqlite.Models;

var repo = new ProductsRepo();
var products = repo.GetProducts();
foreach(var product in products)
{
    Console.WriteLine($"{product.Id}\t {product.Name}\t "
           + $" {product.Price}\t {product.Type}");
}
//uzytkownik wprowadza id produktu w osobnej funkcji w ProductsRepo
//wyswietlamy produkt o podanym id
Console.WriteLine("Podaj id produktu: ");
int id = Convert.ToInt32(Console.ReadLine());
Product? findProduct = repo.GetProductById(id);
if(findProduct != null)
{
    Console.WriteLine($"{findProduct.Id}\t {findProduct.Name}\t "
           + $" {findProduct.Price}\t {findProduct.Type}");
}
else
{
    Console.WriteLine("Brak produktu o podanym id");
}
Product newProduct = CreateProduct();
repo.AddProduct(newProduct);

//napisz metodę która prosi uzytkownika o podanie danych produktu
// i generuj nowy obiekt Product nazwa cena typ

Product CreateProduct(){
    Console.WriteLine("Podaj nazwę produktu: ");
    string? name = Console.ReadLine();
    Console.WriteLine("Podaj cenę produktu: ");
    decimal price = Convert.ToDecimal(Console.ReadLine());
    Console.WriteLine("Podaj typ produktu: ");
    string? type = Console.ReadLine();
    return new Product{
        Name = name,
        Price = price,
        Type = type
    };
}
