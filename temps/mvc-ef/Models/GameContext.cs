using System;
using Microsoft.EntityFrameworkCore;

namespace mvc_ef.Models;

public class GameContext : DbContext
{
    public DbSet<Game> Games { get; set; }

    public GameContext(DbContextOptions<GameContext> options) : base(options)
    {
    }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Game>().HasData(
            new Game { Id = 1, Title = "Super Mario Bros", Genre = "Platformer", Price = 39.99m, ReDate = new DateOnly(1985, 9, 13) },
            new Game { Id = 2, Title = "The Legend of Zelda", Genre = "Action-Adventure", Price = 49.99m, ReDate = new DateOnly(1986, 2, 21) },
            new Game { Id = 3, Title = "Metroid", Genre = "Action-Adventure", Price = 39.99m, ReDate = new DateOnly(1986, 8, 6) },
            new Game { Id = 4, Title = "Final Fantasy", Genre = "Role-Playing", Price = 59.99m, ReDate = new DateOnly(1987, 12, 18) }
            );
    }

}
