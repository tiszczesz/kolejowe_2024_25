using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace ark1_rest.Models;

public class MyReservation
{
    
    public int Id { get; set; }
    
    [DisplayName("Numer stolika")]
    [Required(ErrorMessage = "Numer stolika jest wymagany")]
    public int? SeatId { get; set; }

    [DisplayName("Data rezerwacji")]
    [Required(ErrorMessage = "Data rezerwacji jest wymagana")]
    public DateOnly? DateRes { get; set; }
    
    [DisplayName("Ilość osob")]
    [Required(ErrorMessage = "Ilość osób jest wymagana")]
    public int? Count { get; set; }
   
    [DisplayName("Telefon")]
    [Required(ErrorMessage = "Telefon jest wymagany")]
    public string? Phone { get; set; }
}
