using Microsoft.AspNetCore.Mvc;

namespace cw10_layout.Controllers
{
    public class StudentsController : Controller
    {
        // GET: StudentsController
        public ActionResult List()
        {
            return View();
        }
        public IActionResult Create()
        {
            return View();
        }

    }
}
