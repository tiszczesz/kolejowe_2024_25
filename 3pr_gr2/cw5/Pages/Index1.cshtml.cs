using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace cw5.Pages
{
    public class Index1Model : PageModel
    {
        public int FajnaLiczba { get; set; }
        public void OnGet()
        {
            var rnd = new Random();
            FajnaLiczba = rnd.Next(1, 100);
        }
    }
}
