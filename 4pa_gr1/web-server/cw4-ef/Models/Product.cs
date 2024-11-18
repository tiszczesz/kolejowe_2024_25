using System;
using System.ComponentModel;

namespace cw4_ef.Models;

public class Product
{
    public int Id { get; set; }
    
    [DisplayName("Nazwa produktu")]
    public string Name { get; set; }

    [DisplayName("Cena")]
    public decimal? Price { get; set; }

    [DisplayName("Opis")]
    public string? Description { get; set; }

    [DisplayName("Kategoria")]
    public string? Category { get; set; }

    [DisplayName("Data dodania")]
    public DateOnly? DateAdded { get; set; }
}
