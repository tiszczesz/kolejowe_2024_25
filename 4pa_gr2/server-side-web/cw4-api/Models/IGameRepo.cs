using System;

namespace cw4_api.Models;

public interface IGameRepo
{
    List<Game> GetGames();
    Game? GetGameById(int id);
    void AddGame(Game game);
    void UpdateGame(Game game);
    void DeleteGame(int id);
}
