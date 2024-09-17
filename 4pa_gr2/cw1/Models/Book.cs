using System;
using System.ComponentModel.DataAnnotations;

namespace cw1.Models;

public class Book
{
    public int Id { get; set; }
    
    [Display(Name = "Tytuł")]
    [Required(ErrorMessage = "Podaj tytuł")]
    [StringLength(100,MinimumLength = 3, ErrorMessage = "Tytuł musi zawierać się miedzy 3 i 100 znaków")]
    public string? Title { get; set; }

    [Display(Name = "Autor")]
    [Required(ErrorMessage = "Podaj autora")]
    [StringLength(100,MinimumLength = 3, ErrorMessage = "Autor musi zawierać się miedzy 3 i 100 znaków")]
    public string? Author { get; set; }
    
    [Display(Name = "Cena")]
    [Required(ErrorMessage = "Podaj cenę")]
    [Range(0, 1000, ErrorMessage = "Cena musi być z przedziału 0-1000")]
    public decimal? Price { get; set; }
}
