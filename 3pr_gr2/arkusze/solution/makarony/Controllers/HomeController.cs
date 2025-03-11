using makarony.Models;
using Microsoft.AspNetCore.Mvc;

namespace makarony.Controllers
{
    public class HomeController : Controller
    {
        private RepoReservation _repo;
        public HomeController(IConfiguration configuration)
        {
            _repo = new RepoReservation(configuration);
        }
        // GET: HomeController
        public ActionResult Index()
        {
            return View();
        }
        [HttpPost]
        public IActionResult Result(Reservation reservation){
            if(reservation == null){
                return RedirectToAction("Index");
            }
            reservation.Place = 1;
            if(!String.IsNullOrEmpty(reservation.Date) && 
            !String.IsNullOrEmpty(reservation.Phone) &&reservation.Count>0){
                _repo.SaveToDb(reservation); 
                return RedirectToAction(nameof(List));
            }
            return RedirectToAction("Index");
           
        }
        public IActionResult List(){
            List<Reservation> reservations = _repo.GetAllReservations();
            return View(reservations);
        }

    }
}
