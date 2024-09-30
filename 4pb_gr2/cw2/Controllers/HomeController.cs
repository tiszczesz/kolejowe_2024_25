using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using cw2.Models;

namespace cw2.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;
    private readonly GamesRepo _gamesRepo;

    public HomeController(ILogger<HomeController> logger,IConfiguration configuration)
    {
        _logger = logger;
        _gamesRepo = new GamesRepo(configuration);
    }
    
    public IActionResult Games()
    {
        List<Game> games = _gamesRepo.GetGames();
        
        return View(games);
    }

    public IActionResult Index()
    {
        return View();
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
    public IActionResult AddGame()
    {
        var genres = _gamesRepo.GetGenres();
        ViewBag.Genres = genres;
        return View();
    }
      [HttpPost]
    public IActionResult AddGame(Game game)
    {
        var genres = _gamesRepo.GetGenres();
         ViewBag.Genres = genres;
        if (ModelState.IsValid)
        {
            _gamesRepo.AddGame(game);
            return RedirectToAction("Games");
        }
        return View(game);
    }
}

