using System;

namespace cw3_api.Models;

public class FakeGamesRepo : IGameRepo
{
    private List<Game> _games;
    public FakeGamesRepo()
    {
        _games = new List<Game>()
        {
            new Game { Id = 1, Title = "The Legend of Zelda: Breath of the Wild", Genre = "Action-adventure", Year = 2017, Platform = "Nintendo Switch" },
            new Game { Id = 2, Title = "The Witcher 3: Wild Hunt", Genre = "Action role-playing", Year = 2015, Platform = "PlayStation 4" },
            new Game { Id = 3, Title = "Red Dead Redemption 2", Genre = "Action-adventure", Year = 2018, Platform = "PlayStation 4" },
            new Game { Id = 4, Title = "Super Mario Odyssey", Genre = "Platform", Year = 2017, Platform = "Nintendo Switch" },
            new Game { Id = 5, Title = "God of War", Genre = "Action-adventure", Year = 2018, Platform = "PlayStation 4" }
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
        throw new NotImplementedException();
    }

    public List<Game> GetGames()
    {
        throw new NotImplementedException();
    }

    public void UpdateGame(Game game)
    {
        throw new NotImplementedException();
    }
}
