using System;

namespace mvc_ef.Models;

public class Game
{
    public int Id { get; set; }
    public string? Title { get; set; }
    public string?  Genre { get; set; }
    public decimal? Price { get; set; }
    public DateOnly? ReDate { get; set; }
}
