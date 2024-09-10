

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
}