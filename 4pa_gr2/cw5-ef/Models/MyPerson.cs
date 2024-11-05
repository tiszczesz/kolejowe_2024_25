using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace cw5_ef.Models;

public class MyPerson
{
    [Key]
     public int Id { get; set; }
    
    [DisplayName("Imię")]
    public string FirstName { get; set; }
    
    [DisplayName("Nazwisko")]
    public string LastName { get; set; }
    
    [DisplayName("Data urodzenia")]
    public DateOnly BirthDate { get; set; }
}
