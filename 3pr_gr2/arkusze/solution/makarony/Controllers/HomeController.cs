using makarony.Models;
using Microsoft.AspNetCore.Mvc;

namespace makarony.Controllers
{
    public class HomeController : Controller
    {
        // GET: HomeController
        public ActionResult Index()
        {
            return View();
        }
        [HttpPost]
        public IActionResult Result(Reservation reservation){
            return View(reservation);
        }

    }
}
