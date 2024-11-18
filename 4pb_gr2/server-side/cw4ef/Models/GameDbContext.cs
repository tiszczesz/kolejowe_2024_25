using System;
using Microsoft.EntityFrameworkCore;

namespace cw4ef.Models;

public class GameDbContext : DbContext
{
    public DbSet<Game> Games { get; set; }
    public GameDbContext(DbContextOptions<GameDbContext> options)
    : base(options)
    {
        
    }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Game>().HasData(
            new Game
            {
                Id = 1,
                Title = "Cyberpunk 2077",
                Price = 200,
                ReleaseDate = new DateOnly(2020, 12, 10)
            },
            new Game
            {
                Id = 2,
                Title = "The Witcher 3: Wild Hunt",
                Price = 100,
                ReleaseDate = new DateOnly(2015, 5, 19)
            },
            new Game
            {
                Id = 3,
                Title = "The Elder Scrolls V: Skyrim",
                Price = 50,
                ReleaseDate = new DateOnly(2011, 11, 11)
            }
        );
    }
}
