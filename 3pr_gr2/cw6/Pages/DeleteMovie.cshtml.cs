using cw6.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace cw6.Pages
{
    public class DeleteMovieModel : PageModel
    {
        private MoviesRepo _repo = new MoviesRepo();
        public IActionResult OnGet(int? id)
        {
            if (id != null)
            {
                Movie? movie = _repo.GetById(id);
            }
           
        }
    }
}
