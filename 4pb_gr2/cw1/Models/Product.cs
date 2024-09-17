using System;
using System.ComponentModel.DataAnnotations;

namespace cw1.Models;

public class Product
{
    public int Id { get; set; }
    
    [Required(ErrorMessage = "Podaj nazwę produktu")]
    public string? Name { get; set; }
    
    [Required(ErrorMessage = "Podaj kategorię produktu")]
    public string? Category { get; set; }
    
    [Required(ErrorMessage = "Podaj cenę produktu")]
    [Range(0.01, double.MaxValue, ErrorMessage = "Cena musi być większa od 0")]
    public decimal? Price { get; set; }
}
