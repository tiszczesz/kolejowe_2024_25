using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace cw3.Models;

public class Genre
{
    public int Id { get; set; }
    
    [DisplayName("Nazwa gatunku")]
    [Required(ErrorMessage = "Pole jest wymagane")]
    public string? Name { get; set; }
    
    [DisplayName("Opis gatunku")]
    [Required(ErrorMessage = "Pole jest wymagane")]
    public string? Description { get; set; }
}
