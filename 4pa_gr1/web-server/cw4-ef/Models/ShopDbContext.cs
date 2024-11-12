using System;
using Microsoft.EntityFrameworkCore;

namespace cw4_ef.Models;

public class ShopDbContext : DbContext
{
    public DbSet<Product> Products { get; set; }//to będzie nazwa tabeli w bazie danych

    public ShopDbContext(DbContextOptions<ShopDbContext> options)
    : base(options) //konstruktor klasy bazowej DbContext
    {
    }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        modelBuilder.Entity<Product>().HasData(
            new Product
            {
                Id = 1,
                Name = "Produkt 1",
                Price = 100,
                Description = "Opis produktu 1",
                Category = "Kategoria 1",
                DateAdded = new DateOnly(2021, 10, 1)
            },
            new Product
            {
                Id = 2,
                Name = "Produkt 2",
                Price = 200,
                Description = "Opis produktu 2",
                Category = "Kategoria 2",
                DateAdded = new DateOnly(2021, 10, 2)
            },
            new Product
            {
                Id = 3,
                Name = "Produkt 3",
                Price = 300,
                Description = "Opis produktu 3",
                Category = "Kategoria 3",
                DateAdded = new DateOnly(2021, 10, 3)
            }
        );
    }
}
