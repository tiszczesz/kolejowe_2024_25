using cw1.Models;
using Microsoft.AspNetCore.Mvc;

namespace cw1.Controllers
{
    public class HomeController : Controller
    {
        private readonly BooksRepo _booksRepo;
        public HomeController(IConfiguration configuration)
        {
            _booksRepo = new BooksRepo(configuration);
        }
        // GET: HomeController
        public ActionResult Index()
        {
            var books = _booksRepo.GetBooks();
            return View(books);
        }

        public IActionResult AddNewBook()
        {
            return View();
        }
        public IActionResult OrderedBoks(string? sort)
        {
            List<Book> books;
            if (sort == "asc")
            {
                books = _booksRepo.GetBooks().OrderBy(x => x.Title).ToList();
            }
            else
            {
                books = _booksRepo.GetBooks().OrderByDescending(x => x.Title).ToList();
            }

            ViewBag.Sort = sort == "asc" ? "desc" : "asc";
            return View("Index", books);
        }

    }
}
