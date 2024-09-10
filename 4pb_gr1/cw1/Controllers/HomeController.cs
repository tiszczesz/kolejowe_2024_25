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
        public ActionResult Kolejowe(){
            return View();
        }

    }
}
