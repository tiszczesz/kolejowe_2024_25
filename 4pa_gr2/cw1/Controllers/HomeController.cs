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

        [HttpGet]
        public IActionResult AddNewBook()
        {
            return View();
        }
        [HttpPost]
        public IActionResult AddNewBook(Book book)
        {
            if(ModelState.IsValid){
                _booksRepo.AddBook(book);
                return RedirectToAction("Index");
            }
            return View();
        }

        [HttpGet]
        public IActionResult UpdateBook(int? id)
        {
            if (id == null)
            {
                return RedirectToAction("Index");
            }
            var book = _booksRepo.GetBooks().FirstOrDefault(b => b.Id == id);
            return View(book);
        }
        [HttpPost]
        public IActionResult UpdateBook(Book book)
        {
            if (ModelState.IsValid)
            {
                var toUpdate = _booksRepo.GetBooks().FirstOrDefault(b => b.Id == book.Id);
                if(toUpdate == null)
                {
                    return RedirectToAction("Index");
                }
                toUpdate.Title = book.Title ;
                toUpdate.Author = book.Author;
                toUpdate.Price = book.Price;
                _booksRepo.UpdateBook(toUpdate);
                return RedirectToAction("Index");
            }
            return View(book);
        }

        public IActionResult DeleteBook(int id)
        {
            _booksRepo.DeleteBook(id);
            return RedirectToAction("Index");
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
