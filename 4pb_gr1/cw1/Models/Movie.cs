using System;
using System.ComponentModel.DataAnnotations;


namespace cw1.Models;

public class Movie  //DTO
{
    public int Id { get; set; }
    
    [Required(ErrorMessage = "Musisz podać tytuł")]   
    
    public string? Title { get; set; } 
    
    [Required(ErrorMessage = "Musisz podać reżysera")]
    public string? Director { get; set; }
    
    [Range(1900, 2021, ErrorMessage = "Rok musi być z zakresu 1900-2021")]
    [Required(ErrorMessage = "Musisz podać rok produkcji")]
    public int? Year { get; set; }
}
