using System;

namespace cw6.Models;

public class Movie
{
    public int Id { get; set; }
    public string? Title { get; set; }
    public string? Director { get; set; }
    public DateOnly ReleaseDate { get; set; }
    public string? Genre { get; set; }
    public double? Price { get; set; }
}
