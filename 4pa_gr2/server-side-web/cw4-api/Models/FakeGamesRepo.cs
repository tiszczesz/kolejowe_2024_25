using System;

namespace cw4_api.Models;

public class FakeGamesRepo : IGameRepo
{
    private List<Game> _games;
    public FakeGamesRepo()
    {
        _games = new List<Game>
        {
            new Game { Id = 1, Title = "GTA V", Genre = "Action",
             ReleaseDate = new DateOnly(2013, 9, 17),
             Price = 99.99m },
            new Game { Id = 2, Title = "The Witcher 3",
             Genre = "RPG", ReleaseDate = new DateOnly(2015, 5, 19),
             Price = 59.99m },
            new Game { Id = 3, Title = "Cyberpunk 2077",
            Genre = "RPG", ReleaseDate = new DateOnly(2020, 12, 10),
             Price = 199.99m }
        };
    }
    public void AddGame(Game game)
    {
        throw new NotImplementedException();
    }

    public void DeleteGame(int id)
    {
        throw new NotImplementedException();
    }

    public Game? GetGameById(int id)
    {
        return _games.FirstOrDefault(g => g.Id == id);
    }

    public List<Game> GetGames()
    {
        return _games;
    }

    public void UpdateGame(Game game)
    {
        throw new NotImplementedException();
    }
}
