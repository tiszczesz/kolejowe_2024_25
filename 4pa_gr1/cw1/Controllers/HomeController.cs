using cw1.Models;
using Microsoft.AspNetCore.Mvc;

namespace cw1.Controllers
{
    public class HomeController : Controller
    {
        private BooksRepo _repo;
        public HomeController(IConfiguration configuration)
        {
            _repo = new BooksRepo(configuration);
        }
        // GET: HomeController
        public ActionResult Index()
        {
            var books = BooksRepo.GetBooksList();
            return View(books);
        }
        public IActionResult GetFromDb()
        {
            var books = _repo.GetBooksListFromDb();
            return View(books);
        }

        [HttpGet]
        public IActionResult InsertBook()
        {
            return View();
        }
        [HttpPost]
        public IActionResult InsertBook(Book book)
        {
            if(ModelState.IsValid)
            {
                 _repo.InsertBook(book);
                 return RedirectToAction("GetFromDb");               
            }
            return View();
        }
    }
}
