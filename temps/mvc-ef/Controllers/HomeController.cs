using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using mvc_ef.Models;

namespace mvc_ef.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;
    private readonly GameContext _context;

    public HomeController(ILogger<HomeController> logger, GameContext context)
    {
        _logger = logger;
        _context = context;
    }


    public async Task< IActionResult> Index()
    {
        var games =await _context.Games.ToListAsync();
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
