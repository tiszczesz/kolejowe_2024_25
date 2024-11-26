using System.Text;
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
            // ViewData["Primes"] = Models.Primes.GetPrimes(Count);
            var primes = Models.Primes.GetPrimes(Count);
            ViewData["Primes"] = GeneratePrimesTable(primes);
        }
        private string GeneratePrimesTable(List<int> primes)
    {
        if (primes == null || primes.Count == 0)
        {
            return "<p>No prime numbers found.</p>";
        }

        StringBuilder html = new StringBuilder();
        html.Append("<table class='table table-bordered table-striped'> ");
        html.Append("<thead><tr><th>Index</th><th>Prime Number</th></tr></thead>");
        html.Append("<tbody>");

        for (int i = 0; i < primes.Count; i++)
        {
            html.Append("<tr>");
            html.AppendFormat("<td>{0}</td>", i);
            html.AppendFormat("<td>{0}</td>", primes[i]);
            html.Append("</tr>");
        }

        html.Append("</tbody>");
        html.Append("</table>");

        return html.ToString();
    }
    }
}
