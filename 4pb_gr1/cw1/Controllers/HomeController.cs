using cw1.Models;
using Microsoft.AspNetCore.Mvc;

namespace cw1.Controllers
{
    public class HomeController : Controller
    {
        private MoviesRepo _repo;
        public HomeController(IConfiguration configuration)
        {
            _repo = new MoviesRepo(configuration);
        }
        // GET: HomeController
        public ActionResult Index()
        {
            var movies = _repo.GetMovies();
            return View(movies);
        }
        public ActionResult Kolejowe()
        {
            return View();
        }
        [HttpGet]
        public IActionResult Create()
        {
            return View();//pokaż formularz
        }
        [HttpPost]
        public IActionResult Create(Movie movie)
        {
            if (ModelState.IsValid)//sprawdź czy dane są poprawne
            {
                _repo.AddMovie(movie);//zapamiętaj film do sqlite
                return RedirectToAction("Index");//przekieruj na stronę główną Lista filmów
            }
            return View();//wróć do formularza gdy niepoprawne dane
        }
        public IActionResult DeleteMovie(int id)
        {
            _repo.DeleteMovieFromDB(id);
            return RedirectToAction("Index");
        }
        [HttpGet]
        public IActionResult UpdateMovie(int id)
        {
            Movie movie = _repo.GetMovieById(id);
            if (movie == null)
            {
                return RedirectToAction("Index");
            }
            return View(movie);
        }
        [HttpPost]
           public IActionResult UpdateMovie(Movie movie, int id)
        {
            var movieToUpdate = _repo.GetMovieById(id);
            if (movieToUpdate == null)
            {
                return RedirectToAction("Index");
            }
            //zmieniaja wartości filmu na nowe
            movieToUpdate.Title = movie.Title;
            movieToUpdate.Director = movie.Director;
            movieToUpdate.Year = movie.Year;
            movieToUpdate.Id = id;
            _repo.UpdateMovie(movieToUpdate);//zapisać zmiany w bazie
            return RedirectToAction("Index");
        }
    }
}
