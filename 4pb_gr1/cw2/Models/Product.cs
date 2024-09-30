using System;
using System.ComponentModel.DataAnnotations;

namespace cw2.Models;

public class Product
{
    public int Id { get; set; }
    
    [Display(Name = "Nazwa produktu")]
    [Required(ErrorMessage = "Nazwa produktu jest wymagana")]
    public string? Name { get; set; }
    
    [Display(Name = "Opis produktu")]    
    public string? Description { get; set; }
    
    [Display(Name = "Cena produktu")]
    [Required(ErrorMessage = "Cena produktu jest wymagana")]
    [Range(0, 100000, ErrorMessage = "Cena produktu musi być z przedziału 0-100000")]
    public decimal? Price { get; set; }
    
    [Display(Name = "Kategoria produktu")]
    public int GenreId { get; set; }
}
