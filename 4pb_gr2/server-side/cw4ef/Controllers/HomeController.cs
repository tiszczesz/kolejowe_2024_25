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
    [HttpGet]
    public IActionResult AddGame()
    {
        return View();
    }
    [HttpPost]
    public IActionResult AddGame(Game game)
    {
        if (ModelState.IsValid)
        {
            _db.Games.Add(game);
            _db.SaveChanges();
            return RedirectToAction("List");
        }
        return View(game);
    }
    public IActionResult DeleteGame(int id)
    {
        var game = _db.Games.Find(id);
        if (game != null)
        {
            _db.Games.Remove(game);
            _db.SaveChanges();
        }
        return RedirectToAction("List");
    }

    [HttpGet]
    public IActionResult EditGame(int id)
    {
        var game = _db.Games.Find(id);
        if (game == null)
        {
            return RedirectToAction("List");
        }
        return View(game);
    }

    [HttpPost]
    public IActionResult EditGame(Game game)
    {
        
        if (ModelState.IsValid)
        {
            _db.Games.Update(game);
            _db.SaveChanges();
            return RedirectToAction("List");
        }
        return View(game);
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
