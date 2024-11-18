using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace cw3.Models;

public class Movie
{
    public int Id { get; set; }
    
    [DisplayName("Tytuł filmu")]
    [Required(ErrorMessage = "Pole jest wymagane")]
    [StringLength(50, ErrorMessage = "Pole musi zawierać od 1 do 50 znaków")]
    public string? Title { get; set; }
    
    [DisplayName("Reżyser")]
    [Required(ErrorMessage = "Pole jest wymagane")]
    [StringLength(50, ErrorMessage = "Pole musi zawierać od 1 do 50 znaków")]
    public string? Director { get; set; }
    
    [DisplayName("Cena filmu")]
    [Required(ErrorMessage = "Pole jest wymagane")]
    [Range(0, 1000, ErrorMessage = "Cena musi być z przedziału od 0.01 do 1000")]
    public decimal? Price { get; set; }
    
    [DisplayName("Rodzaj filmu")]
    public int GenreId { get; set; }
}
