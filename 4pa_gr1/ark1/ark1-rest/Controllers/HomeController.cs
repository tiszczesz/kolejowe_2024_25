using Microsoft.AspNetCore.Mvc;

namespace ark1_rest.Controllers
{
    public class HomeController : Controller
    {
        // GET: HomeController
        public ActionResult Index()
        {
            return View();
        }

    }
}
