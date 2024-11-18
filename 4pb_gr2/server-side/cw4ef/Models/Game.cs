using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace cw4ef.Models;

public class Game
{
    public int Id { get; set; }
    
    [DisplayName("Tytuł gry")]
    [Required(ErrorMessage = "Tytuł jest wymagany")]
    [StringLength(100, ErrorMessage = "Tytuł jest za długi")]
    public string? Title { get; set; }
    
    [DisplayName("Cena")]
    [Required(ErrorMessage = "Cena jest wymagana")]
    [Range(0, 1000, ErrorMessage = "Cena musi być z przedziału 0-1000")]
    public decimal? Price { get; set; }
    
    [DisplayName("Data wydania")]
    [Required(ErrorMessage = "Data wydania jest wymagana")]
    public DateOnly? ReleaseDate { get; set; }
}
