using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace cw2.Models;

public class Genre
{
    
    public int Id { get; set; }
    
    [DisplayName("Nazwa")]
    [Required(ErrorMessage = "Pole jest wymagane")]
    public string? Name { get; set; }
    
    [DisplayName("Opis")]
    public string? Description { get; set; }
}
