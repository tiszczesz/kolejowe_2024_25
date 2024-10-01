using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using cw3.Models;

namespace cw3.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;
    private readonly MoviesRepo _moviesRepo;

    public HomeController(ILogger<HomeController> logger,IConfiguration configuration)
    {
        _logger = logger;
        _moviesRepo = new MoviesRepo(configuration);
    }

    public IActionResult Index()
    {
        var movies = _moviesRepo.GetMovies();
        return View(movies);
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
}
