using cw1.Models;
using Microsoft.AspNetCore.Mvc;

namespace cw1.Controllers
{
    public class HomeController : Controller
    {
        private readonly BooksRepo _booksRepo;
        public HomeController(){
            _booksRepo =new BooksRepo();
        }
        // GET: HomeController
        public ActionResult Index()
        {
            var books = _booksRepo.GetBooks();
            return View(books);
        }

        public IActionResult AddNewBook(){
            return View();
        }

    }
}
