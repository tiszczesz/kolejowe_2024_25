using Microsoft.AspNetCore.Mvc;

namespace cw9_db.Controllers
{
    public class HomeController : Controller
    {
        // GET: HomeController
        public ActionResult Index()
        {
            return View();
        }
        public IActionResult OtherName(){
            return View("MyView");
        }

    }
}
