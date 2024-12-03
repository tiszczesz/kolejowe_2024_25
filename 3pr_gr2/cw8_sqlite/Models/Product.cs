using System;

namespace cw8_sqlite.Models;

public class Product
{
    public int Id { get; set; }
    public string? Name { get; set; }
    public decimal? Price { get; set; }
    public string? Type { get; set; }
}
