using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using cw4ef.Models;

namespace cw4ef.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;
    private readonly GameDbContext _db;

    public HomeController(
        ILogger<HomeController> logger,
        GameDbContext db)
       
    {
        _logger = logger;
        _db = db;
    }

    public IActionResult Index()
    {
        return View();
    }
    public IActionResult List()
    {
        var games = _db.Games.ToList();
        return View(games);
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
