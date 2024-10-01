using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace cw2.Models;

public class Movie
{
    public int Id { get; set; }
    
    [DisplayName("Tytuł filmu")]
    [Required(ErrorMessage = "Tytuł filmu jest wymagany")]
    [StringLength(50, ErrorMessage = "Tytuł filmu nie może być dłuższy niż 50 znaków")]
    public string? Title { get; set; }
    
    [DisplayName("Reżyser")]
    [Required(ErrorMessage = "Reżyser jest wymagany")]
    [StringLength(50, ErrorMessage = "Reżyser nie może być dłuższy niż 50 znaków")]
    public string? Director { get; set; }
    
    [DisplayName("Cena")]
    [Required(ErrorMessage = "Cena jest wymagana")]
    [Range(0, 1000, ErrorMessage = "Cena musi być z przedziału od 0 do 1000")]
    public decimal? Price { get; set; }
    
    [DisplayName("Gatunek")]
    public int GenreId { get; set; }
}
