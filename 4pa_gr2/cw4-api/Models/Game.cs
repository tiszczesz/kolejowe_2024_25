using System;

namespace cw4_api.Models;

public class Game
{
    public int Id { get; set; }
    public string? Title { get; set; }
    public string? Genre { get; set; }
    public DateOnly ReleaseDate { get; set; }
    public decimal? Price { get; set; }
}
