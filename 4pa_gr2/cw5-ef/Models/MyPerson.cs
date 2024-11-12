using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace cw5_ef.Models;

public class MyPerson
{
    [Key]
     public int Id { get; set; }
    
    [DisplayName("Imię")]
    [Required(ErrorMessage = "Imię jest wymagane")]
    [StringLength(50, ErrorMessage = "Imię nie może być dłuższe niż 50 znaków")]
    public string FirstName { get; set; }
    
    [DisplayName("Nazwisko")]
    [Required(ErrorMessage = "Nazwisko jest wymagane")]
    [StringLength(60, ErrorMessage = "Nazwisko nie może być dłuższe niż 60 znaków")]
    public string LastName { get; set; }
    
    [DisplayName("Data urodzenia")]
    [Required(ErrorMessage = "Data urodzenia jest wymagana")]
    public DateOnly BirthDate { get; set; }

    public int? WorkPlaceId { get; set; }
    public WorkPlace? Place { get; set; }
}
