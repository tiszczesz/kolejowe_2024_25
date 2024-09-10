using System;

namespace cw1.Models;

public class Movie  //DTO
{
    public int Id { get; set; }
    public string? Title { get; set; }
    public string? Director { get; set; }
    public int Year { get; set; }
}
