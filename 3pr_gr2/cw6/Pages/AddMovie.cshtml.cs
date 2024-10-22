using cw6.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace cw6.Pages
{
    public class AddMovieModel : PageModel
    {
        [BindProperty]
        public Movie? MyMovie { get; set; }
        public List<string>? Genres { get; set; }
        public AddMovieModel()
        {
            Genres = new List<string> {
                 "Action", "Crime", "Drama",
                 "Fantasy","Sci-Fi","Comedy",
                 "Horror" };
        }
        public void OnGet()
        {
            ViewData["Genres"] = Genres;
            ViewData["Message"] = "Dopiero wywitlamy formularz";
        }
        public IActionResult OnPost()
        {
            if(MyMovie == null)
            {
                ViewData["Message"] = "Brak danych";
                return Page();
            }
            ViewData["Genres"] = Genres;
            if (ModelState.IsValid)
            {
                // Add movie to database
                MoviesRepo repo = new MoviesRepo("movies.json");
                repo.AddMovie(MyMovie);
                ViewData["Message"] = "Film dodany";
                return RedirectToPage("Index");
            }
            else
            {
                ViewData["Message"] = "Niepoprawne dane";                
            }
            return Page();
        }
    }
}
