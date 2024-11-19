

using cw1.Models;
using Microsoft.AspNetCore.Mvc;
namespace cw1.Controllers;
public class HomeController : Controller
{
    private ProductsRepo _productsRepo;
    public HomeController(IConfiguration configuration)
    {
        _productsRepo = new ProductsRepo(configuration);
    }
    public IActionResult Index()
    {
        var products = _productsRepo.GetProducts();
        return View(products);
    }

    [HttpGet]
    public IActionResult AddProduct()
    {
        return View();//aby wyświetlić formularz
    }
    [HttpPost]
    public IActionResult AddProduct(Product product)
    { //aby odebrać dane z formularza
        if (ModelState.IsValid)
        {
            _productsRepo.AddProduct(product);//dodanie produktu do bazy
            return RedirectToAction("Index");
        }
        return View();
    }
    public IActionResult IndexSort(string? sort)
    {
        var products = _productsRepo.GetProducts();//pobranie produktów z bazy
        switch (sort)//wybór sposobu sortowania
        {
            case "name":
                products = products.OrderBy(p => p.Name).ToList();
                break;
            case "category":
                products = products.OrderBy(p => p.Category).ToList();
                break;
            case "price":
                products = products.OrderBy(p => p.Price).ToList();
                break;
        }
        return View("Index", products);//przekazanie posortowanej listy do widoku Index
    }


    public async Task<IActionResult> Delete(int id)
    {
        await _productsRepo.DeleteProductFromDB(id);
        return RedirectToAction("Index");
    }
    [HttpGet]
    public async Task<IActionResult> Edit(int id)
    {
        var product = await _productsRepo.GetProductById(id);
        if(product == null)
        {
            return RedirectToAction("Index");
        }
        return View(product);
    }
    [HttpPost]
    public async Task<IActionResult> Edit(Product product)
    {
        if (ModelState.IsValid)
        {
            await _productsRepo.EditProduct(product);
            return RedirectToAction("Index");
        }
        return View();
    }

}