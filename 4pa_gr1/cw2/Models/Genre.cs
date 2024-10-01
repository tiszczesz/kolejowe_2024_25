using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace cw2.Models;

public class Genre
{
    public int Id { get; set; }
   
    [DisplayName("Nazwa gatunku")]
    [Required(ErrorMessage = "Nazwa gatunku jest wymagana")]
    public string? Name { get; set; }
    
    [DisplayName("Opis")]
    [Required(ErrorMessage = "Opis jest wymagany")]
    public string? Description { get; set; }
}
