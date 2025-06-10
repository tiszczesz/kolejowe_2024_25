using Microsoft.AspNetCore.Mvc;

namespace mywebApp.Controllers
{
    public class HomeController : Controller
    {
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

    }
}
