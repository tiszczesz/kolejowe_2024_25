using System;
using Microsoft.EntityFrameworkCore;

namespace cw5ef.Models;

public class CarsDbContext : DbContext
{
    //ustawienie tabeli w bazie danych
    public DbSet<Car> Cars { get; set; }
    public CarsDbContext(DbContextOptions<CarsDbContext> options)
        : base(options)
    {        
    }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Car>().HasData(
            new Car
            {
                Id = 1,
                CarModel = "Astra",
                CarBrand = "Opel",
                Price = 50000,
                ProductionDate = new DateOnly(2010, 10, 10)
            },
            new Car
            {
                Id = 2,
                CarModel = "Corsa",
                CarBrand = "Opel",
                Price = 30000,
                ProductionDate = new DateOnly(2015, 10, 10)
            },
            new Car
            {
                Id = 3,
                CarModel = "Golf",
                CarBrand = "Volkswagen",
                Price = 60000,
                ProductionDate = new DateOnly(2018, 10, 10)
            },
            new Car
            {
                Id = 4,
                CarModel = "Passat",
                CarBrand = "Volkswagen",
                Price = 80000,
                ProductionDate = new DateOnly(2019, 10, 10)
            },
            new Car
            {
                Id = 5,
                CarModel = "A4",
                CarBrand = "Audi",
                Price = 120000,
                ProductionDate = new DateOnly(2020, 10, 10)
            }
        );
    }

}
