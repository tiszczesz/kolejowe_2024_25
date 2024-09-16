

using cw1.Models;
using Microsoft.AspNetCore.Mvc;
namespace cw1.Controllers;
public class HomeController : Controller {
    private ProductsRepo _productsRepo;
    public HomeController(IConfiguration configuration)
    {
        _productsRepo = new ProductsRepo(configuration);
    }
    public IActionResult Index() {
        var products = _productsRepo.GetProducts();
        return View(products);
    }

    [HttpGet]
    public IActionResult AddProduct() {
        return View();//aby wyświetlić formularz
    }
    [HttpPost]
    public IActionResult AddProduct(Product product) { //aby odebrać dane z formularza
        if(ModelState.IsValid) {
            _productsRepo.AddProduct(product);
            return RedirectToAction("Index");
        }
        return View();
    }
}