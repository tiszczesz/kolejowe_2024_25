using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using cw2.Models;

namespace cw2.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;
    private readonly MoviesRepo _moviesRepo;

    public HomeController(ILogger<HomeController> logger,IConfiguration configuration)
    {
        _logger = logger;
        _moviesRepo = new MoviesRepo(configuration);//tworzymy obiekt klasy MoviesRepo
    }
  
    public IActionResult Index()
    {
        var movies = _moviesRepo.GetMovies();//pobieramy listę filmów
        return View(movies);//zwracamy widok z listą filmów
    }
    [HttpGet]
    public IActionResult InsertMovie(){
        ViewBag.Genres = _moviesRepo.GetGenres();
        return View();
    }

    [HttpPost]
    public IActionResult InsertMovie(Movie movie){
        ViewBag.Genres = _moviesRepo.GetGenres();
        if(ModelState.IsValid){
            _moviesRepo.InsertMovie(movie);
            return RedirectToAction("Index");
        }
        return View(movie);
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
    public async Task<IActionResult> DeleteMovie(int id)
    {
        await _moviesRepo.DeleteMovie(id);
        return RedirectToAction("Index");
    }
    [HttpGet]
    public IActionResult EditMovie(int id)
    {
        ViewBag.Genres = _moviesRepo.GetGenres();
        var movie = _moviesRepo.GetMovie(id);
        if(movie == null)
        {
            return RedirectToAction("Index");
        }
        return View(movie);
    }
     [HttpPost]
    public IActionResult EditMovie(Movie movie)
    {
        ViewBag.Genres = _moviesRepo.GetGenres();
        if(ModelState.IsValid){
            _moviesRepo.UpdateMovie(movie);//aktualizujemy film w DB
            return RedirectToAction("Index");//przekierowujemy do akcji Index
        }
        return View(movie);//zwracamy widok z formularzem z błędami
    }
}
