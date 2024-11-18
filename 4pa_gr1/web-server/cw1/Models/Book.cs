using System;
using System.ComponentModel.DataAnnotations;


namespace cw1.Models;

public class Book
{

    public int Id { get; set;}
    
    [Display(Name = "Tytuł")]
    [Required(ErrorMessage = "Podaj tytuł")]
    [StringLength(100, MinimumLength = 3, ErrorMessage = "Tytuł musi mieć od 3 do 100 znaków")]
    public string? Title { get; set;}
    
    [Display(Name = "Autor")]
    [Required(ErrorMessage = "Podaj autora")]
    [StringLength(100, MinimumLength = 3, ErrorMessage = "Autor musi mieć od 3 do 100 znaków")]
    public string? Author { get; set;}
    
    [Display(Name = "Cena")]
    [Required(ErrorMessage = "Podaj cenę")]
    [Range(0, 1000, ErrorMessage = "Cena musi być z przedziału od 0 do 1000")]
    public decimal? Price { get; set; }
}
