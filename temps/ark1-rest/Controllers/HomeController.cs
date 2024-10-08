using ark1_rest.Models;
using Microsoft.AspNetCore.Mvc;

namespace ark1_rest.Controllers
{
    public class HomeController : Controller
    {
        private readonly ReservationRepo _repo;
        // GET: HomeController
        public HomeController(IConfiguration configuration)
        {
            _repo = new ReservationRepo(configuration);
        }

        [HttpGet]
        public ActionResult Index()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Index(MyReservation reservation)
        {
            _repo.InsertReservation(reservation);
            return View(reservation);
        }

    }
}
