using System;

namespace cw3_api.Models;

public interface IGameRepo
{
    List<Game> GetGames();
    Game? GetGameById(int id);  
    void AddGame(Game game);
    void UpdateGame(Game game);
    void DeleteGame(int id);

}
