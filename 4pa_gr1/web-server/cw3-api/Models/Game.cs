using System;

namespace cw3_api.Models;

public class Game
{
    public int Id { get; set; }
    public string? Title { get; set; }
    public string? Genre { get; set; }
    public DateOnly EditDate { get; set; }
    public decimal? Price { get; set; }
}
