using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace cw7.Pages
{
    public class PrimesModel : PageModel
    {
        [BindProperty]
        public int Count { get; set; }
        public void OnGet()
        {
        }
        public void OnPost()
        {
        }
    }
}
