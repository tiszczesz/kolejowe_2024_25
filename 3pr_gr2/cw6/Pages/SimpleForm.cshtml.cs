using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace cw6.Pages
{
    public class SimpleFormModel : PageModel
    {

        public void OnGet()
        {
            var request = Request;
            ViewData["method"] = "GET";
            //ViewData["Query"] = request.Query;
            // ViewData["Firstname"] = request.Query["firstname"];
            // ViewData["age"] = request.Query["age"];
        }
        public void OnPost()
        {
            ViewData["method"] = "POST";
            var request = Request;


        }
    }
}
