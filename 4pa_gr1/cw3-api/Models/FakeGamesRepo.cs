using System;

namespace cw3_api.Models;

public class FakeGamesRepo : IGamesRepo
{
    public List<Game>? Games { get; set; }
    public FakeGamesRepo()
    {
        Games = new List<Game>{
            new Game{Id=1, Title="Game1", Genre="Genre1",
            EditDate=DateOnly.FromDateTime(DateTime.Now),
            Price=1.99m},
             new Game{Id=2, Title="Game2", Genre="Genre2",
            EditDate=DateOnly.FromDateTime(DateTime.Now),
            Price=33.99m},
             new Game{Id=3, Title="Game3", Genre="Genre1",
            EditDate=DateOnly.FromDateTime(DateTime.Now+TimeSpan.FromDays(1)),
            Price=29.99m},
             new Game{Id=4, Title="Game4", Genre="Genre4",
            EditDate=DateOnly.FromDateTime(DateTime.Now+TimeSpan.FromDays(320)),
            Price=1.99m},

        };
    }
    public void AddGame(Game game)
    {
        throw new NotImplementedException();
    }

    public Game? GetGameById(int id)
    {
        return Games?.FirstOrDefault(g => g.Id == id);
    }

    public List<Game>? GetGames()
    {
        return Games;
    }

    public void UpdateGame(Game game)
    {
        throw new NotImplementedException();
    }

    public void DeleteGame(int id)
    {
        throw new NotImplementedException();
    }
}
