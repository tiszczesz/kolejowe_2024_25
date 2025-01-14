using cw9_db.Models;
using Microsoft.AspNetCore.Mvc;

namespace cw9_db.Controllers
{
    public class ColorsController : Controller
    {
        // GET: ColorsController
        public ActionResult Show()
        {
            List<MyColor> colors = ColorsRepo.GetColors();
            return View("Colors", colors);
        }

    }
}
