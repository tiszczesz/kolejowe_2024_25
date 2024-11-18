using System;

namespace cw5ef.Models;

public class Car
{
    public int Id { get; set; }
    public string? CarModel { get; set; }
    public string? CarBrand { get; set; }
    public decimal? Price { get; set; }
    public DateOnly? ProductionDate { get; set; }
}
