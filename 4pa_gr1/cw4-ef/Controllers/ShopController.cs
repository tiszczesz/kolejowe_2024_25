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
        [HttpGet]
        public IActionResult AddProduct(){
            return View();
        }
          [HttpPost]
        public IActionResult AddProduct(Product product){
            if(ModelState.IsValid){
                _context.Products.Add(product);
                _context.SaveChanges();
                return RedirectToAction("List");
            }
            return View(product);
        }
        public IActionResult DeleteProduct(int? id){
            var productToDelete = _context.Products.Find(id);
            if(productToDelete != null){
                _context.Products.Remove(productToDelete);
                _context.SaveChanges();
            }            
            return RedirectToAction("List");
        }

    }
}
