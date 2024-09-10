using cw1.Models;
using Microsoft.AspNetCore.Mvc;

namespace cw1.Controllers
{
    public class HomeController : Controller
    {
        // GET: HomeController
        public ActionResult Index()
        {
            var books = BooksRepo.GetBooksList();
            return View(books);
        }
        public IActionResult GetFromDb(){
            return View();
        }

    }
}
