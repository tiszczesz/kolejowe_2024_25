using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace cw5ef.Models;

public class Car
{
    public int Id { get; set; }
    
    [DisplayName("model samochodu")]
    [Required(ErrorMessage = "Pole model samochodu jest wymagane")]
    [MaxLength(50, ErrorMessage = "Model samochodu nie może mieć więcej niż 50 znaków")]
    public string? CarModel { get; set; }
    
    [DisplayName("marka samochodu")]
    [Required(ErrorMessage = "Pole marka samochodu jest wymagane")]
    [MaxLength(50, ErrorMessage = "marka samochodu nie może mieć więcej niż 50 znaków")]
    public string? CarBrand { get; set; }
    
    [DisplayName("cena")]
    [Required(ErrorMessage = "Pole cena jest wymagane")]
    [Range(0, 1000000, ErrorMessage = "Cena musi być z przedziału 0-1000000")]
    public decimal? Price { get; set; }
    
    [DisplayName("data produkcji")]
    [Required(ErrorMessage = "Pole data produkcji jest wymagane")]
    public DateOnly? ProductionDate { get; set; }
}
