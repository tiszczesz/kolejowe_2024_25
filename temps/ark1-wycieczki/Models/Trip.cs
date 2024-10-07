using System;

namespace ark1_wycieczki.Models;

public class Trip
{
    public int Id { get; set; }
    public int? PictureId { get; set; }
    public DateOnly? TrapDate { get; set; }
    public string? Target { get; set; }
    public decimal? Price { get; set; }
    public bool? IsExists { get; set; }

}
