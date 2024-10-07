using ark1_wycieczki.Models;
using Microsoft.AspNetCore.Mvc;

namespace ark1_wycieczki.Controllers
{
    public class HomeController : Controller
    {
        private readonly PicturesRepo _picturesRepo;
        public HomeController(IConfiguration configuration)
        {
            _picturesRepo = new PicturesRepo(configuration);
        }
        // GET: HomeController
        public IActionResult Index()
        {
            var pictures =  _picturesRepo.GetPictures().ToList();
            return View(pictures);
        }

    }
}
