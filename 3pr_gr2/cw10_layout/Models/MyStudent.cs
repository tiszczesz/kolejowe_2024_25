using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace cw10_layout.Models;

public class MyStudent
{
    public int Id { get; set; }
    
    [DisplayName("Podaj imię")]
    [Required(ErrorMessage = "Imię jest wymagane")]
    public string FirstName { get; set; }
    
     [DisplayName("Podaj nazwisko")]
    [Required(ErrorMessage = "Nazwisko jest wymagane")]
    public string LastName { get; set; }
    
    [DisplayName("Podaj wiek")]
    [Required(ErrorMessage = "Wiek jest wymagany")]
    [Range(1, 120, ErrorMessage = "Wiek musi być z przedziału 1-120")]
    public int? Age { get; set; }
}
