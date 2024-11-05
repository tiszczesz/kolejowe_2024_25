using Microsoft.AspNetCore.Mvc;

namespace cw5_ef.Controllers
{
    public class PersonController : Controller
    {
        // GET: PersonController
        public ActionResult List()
        {
            return View();
        }

    }
}
