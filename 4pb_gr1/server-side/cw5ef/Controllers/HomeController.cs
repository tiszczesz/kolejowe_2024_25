using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using cw5ef.Models;

namespace cw5ef.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;
    private readonly CarsDbContext _context;

    public HomeController(ILogger<HomeController> logger,
                CarsDbContext db)
    {
        _logger = logger;
        _context = db;
    }
    public IActionResult List()
    {
        var cars = _context.Cars.ToList();
        return View(cars);
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
    public IActionResult AddCar(){
        return View();
    }
    [HttpPost]
    public IActionResult AddCar(Car car){
        if(ModelState.IsValid){
            _context.Cars.Add(car);
            _context.SaveChanges();
            return RedirectToAction("List");
        }
        return View(car);
    }
    public IActionResult DeleteCar(int id){
        var car = _context.Cars.Find(id);
        if(car != null){
            _context.Cars.Remove(car);
            _context.SaveChanges();
        }
        return RedirectToAction("List");
    }
    [HttpGet]
    public IActionResult EditCar(int id){
        var car = _context.Cars.Find(id);
        if(car == null){
            return RedirectToAction("List");
        }
        return View(car);
    }
    [HttpPost]
    public IActionResult EditCar(Car car){
        if(ModelState.IsValid){
            _context.Cars.Update(car);
            _context.SaveChanges();
            return RedirectToAction("List");
        }
        return View(car);
    }

}
