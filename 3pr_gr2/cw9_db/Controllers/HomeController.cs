using Microsoft.AspNetCore.Mvc;

namespace cw9_db.Controllers
{
    public class HomeController : Controller
    {
        // GET: HomeController
        public ActionResult Index()
        {
            var students = new List<string>{"Alojzy", "Roman", "Tomasz", "Anna"};
            return View(students);
        }
        public IActionResult OtherName(){
            return View("MyView");
        }
    }
}
