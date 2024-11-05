using cw5_ef.Models;
using Microsoft.AspNetCore.Mvc;

namespace cw5_ef.Controllers
{
    public class PersonController : Controller
    {
        private readonly PersonDbContext _context;
        public PersonController(PersonDbContext context)
        {
            _context = context;
        }
      
        // GET: PersonController
        public ActionResult List()
        {
            var people = _context.People.ToList();
            return View(people);
        }

    }
}
