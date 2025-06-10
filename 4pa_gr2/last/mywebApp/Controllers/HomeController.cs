using Microsoft.AspNetCore.Mvc;
using mywebApp.Models;

namespace mywebApp.Controllers
{
    public class HomeController : Controller
    {
        private  PersonRepo _repo;
        // GET: HomeController
        public ActionResult Index()
        {
            var colors = new List<string>{
                "Red",
                "Green",
                "Blue",
                "Yellow",
                "Purple"
            };
            return View(colors);
        }
        public IActionResult People()
        {
            _repo = new PersonRepo("people.json");
            var people = _repo.GetAll();
            return View("PeopleView",  people);
        }

    }
}
