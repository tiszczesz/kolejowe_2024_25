using System;
using Microsoft.EntityFrameworkCore;

namespace cw5_ef.Models;

public class PersonDbContext :DbContext
{
    public DbSet<MyPerson> People { get; set; }
    public PersonDbContext(
        DbContextOptions<PersonDbContext> options) //do konfiguracji połączenia z bazą danych
        : base(options) //wywołanie konstruktora klasy bazowej
    {
    }
    //seedowanie bazy danych początkowymi danymi
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<MyPerson>().HasData(
            new MyPerson
            {
                Id = 1,
                FirstName = "Jan",
                LastName = "Kowalski",
                BirthDate = new DateOnly(1990, 1, 1)
            },
            new MyPerson
            {
                Id = 2,
                FirstName = "Anna",
                LastName = "Nowak",
                BirthDate = new DateOnly(1995, 2, 2)
            },
            new MyPerson
            {
                Id = 3,
                FirstName = "Andrzej",
                LastName = "Nowak",
                BirthDate = new DateOnly(2000, 3, 3)
            },
            new MyPerson
            {
                Id = 4,
                FirstName = "Krzysztof",
                LastName = "Kowalski",
                BirthDate = new DateOnly(2005, 4, 4)
            }
        );

    }

    //w aplikacjach Desktopowych
    // protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    // {
    //     optionsBuilder.UseMySql("server=localhost;user=root;password=1234;database=people", ServerVersion.AutoDetect("server=localhost;user=root;password=1234;database=people"));
    // }
    
}
