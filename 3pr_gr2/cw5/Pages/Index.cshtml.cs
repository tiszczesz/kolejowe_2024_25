using cw5.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace cw5.Pages
{
    public class IndexModel : PageModel
    {
        public List<Person> Persons { get; set; }
        public string FajnyTekst { get; set; }="Fajny tekst";
        public void OnGet()
        {
            Persons = GetPersons();
        }
        private List<Person> GetPersons()
        {
            var list = new List<Person>();
            list.Add(new Person { FirstName = "Jan", LastName = "Kowalski", Age = 20 });
            list.Add(new Person { FirstName = "Anna", LastName = "Nowak", Age = 30 });
            list.Add(new Person { FirstName = "Andrzej", LastName = "Nowak", Age = 40 });
            list.Add(new Person { FirstName = "Dominik", LastName = "Nowak", Age = 40 });
            return list;
        }
    }
}
