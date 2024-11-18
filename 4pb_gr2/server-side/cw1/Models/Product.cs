using System;
using System.ComponentModel.DataAnnotations;

namespace cw1.Models;

public class Product
{
    public int Id { get; set; }
    
    [Required(ErrorMessage = "Podaj nazwę produktu")]
    [StringLength(50,MinimumLength = 3, ErrorMessage = "Nazwa produktu musimy mieć od 3 do 50 znaków")]
    public string? Name { get; set; }
    
    [Required(ErrorMessage = "Podaj kategorię produktu")]
    [StringLength(50, MinimumLength = 3, ErrorMessage = "Nazwa kategorii musi mieć od 3 do 50 znaków")]
    public string? Category { get; set; }
    
    [Required(ErrorMessage = "Podaj cenę produktu")]
    [Range(0.01, double.MaxValue, ErrorMessage = "Cena musi być większa od 0")]
    public decimal? Price { get; set; }
}
