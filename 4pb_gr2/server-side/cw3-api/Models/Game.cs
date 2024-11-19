using System;

namespace cw3_api.Models;

public class Game
{
    public int Id { get; set; }
    public string? Title { get; set; }

    public string?  Genre { get; set; }
    public int Year { get; set; }
    public string? Platform { get; set; }
}
