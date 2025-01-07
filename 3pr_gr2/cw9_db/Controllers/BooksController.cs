using cw9_db.Models;
using Microsoft.AspNetCore.Mvc;

namespace cw9_db.Controllers
{
    public class BooksController : Controller
    {
        
        // GET: BooksController
        public ActionResult List()
        {
            return View(MyBooks.GetBooks());
        }

    }
}
