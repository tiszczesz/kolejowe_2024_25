using System;

namespace cw3_api.Models;

public interface IGamesRepo
{
    List<Game> GetGames();
    Game GetGameById(int id);
    void AddGame(Game game);
}

