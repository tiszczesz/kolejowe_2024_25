using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace cw2.Models;

public class Game
{
    public int Id { get; set; }
    
    [DisplayName("Tytuł gry")]
    [Required(ErrorMessage = "Pole jest wymagane")]
    public string? Title { get; set; }
   
   [DisplayName("Rodzaj gry")]
    public int GenreId { get; set; }
    
    [DisplayName("Cena")]
    [Range(0, 1000, ErrorMessage = "Cena musi być z przedziału 0-1000")]
    [Required(ErrorMessage = "Pole jest wymagane")]
    public decimal? Price { get; set; }
   
   [DisplayName("Opis")]
    public string? Description { get; set; }
}
