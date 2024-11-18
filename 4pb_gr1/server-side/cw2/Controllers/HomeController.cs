using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using cw2.Models;

namespace cw2.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;
    private readonly ProductsRepo _productsRepo;

    public HomeController(ILogger<HomeController> logger,
        IConfiguration configuration)
    {
        _logger = logger;
        _productsRepo = new ProductsRepo(configuration);
    }

    public IActionResult Index()
    {
        var products = _productsRepo.GetProducts();
        return View(products);
    }

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }

    [HttpGet]
    public IActionResult AddProduct()
    {
        ViewBag.Genres = _productsRepo.GetGenres();
        return View();
    }
    [HttpPost]
    public IActionResult AddProduct(Product product)
    {
        ViewBag.Genres = _productsRepo.GetGenres();
        if (ModelState.IsValid)
        {
            // Add product to database
            _productsRepo.AddProduct(product);
            return RedirectToAction("Index");
        }
        return View(product);
    }
    public async Task<IActionResult> DeleteProduct(int id)
    {
        await _productsRepo.DeleteProduct(id);
        return RedirectToAction("Index");
    }
    [HttpGet]
    public IActionResult EditProduct(int id)
    {
        ViewBag.Genres = _productsRepo.GetGenres();
        Product? product = _productsRepo.GetProduct(id);
        if(product == null)
        {
            return RedirectToAction("Index");
        }
        return View(product);
    }
    [HttpPost]
    public IActionResult EditProduct(Product product){    
        ViewBag.Genres = _productsRepo.GetGenres();
        if (ModelState.IsValid)
        {
            _productsRepo.EditProduct(product);
            return RedirectToAction("Index");
        }
        return View(product);
    }
}
