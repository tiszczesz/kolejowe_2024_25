using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace cw6.Pages
{
    public class DeleteMovieModel : PageModel
    {
        public void OnGet(int? id)
        {
            if (id == null)
            {
                ViewData["Message"] = "Brak danych";
                //bez usuwania
            }
            else
            {
                ViewData["Message"] = "Usuwamy film o id = " + id;
                //usuwanie filmu
            }
        }
    }
}
