

using Microsoft.AspNetCore.Mvc;
namespace cw1.Controllers;
public class HomeController : Controller {
    public IActionResult Index() {
        return View();
    }
}