using cw4_ef.Models;
using Microsoft.AspNetCore.Mvc;

namespace cw4_ef.Controllers
{
    public class ShopController : Controller
    {
        private readonly ShopDbContext _context;
        public ShopController(ShopDbContext context)
        {
            _context = context;
        }
        // GET: ShopController
        public ActionResult List()
        {
            var products = _context.Products.ToList();
            return View(products);
        }

    }
}
