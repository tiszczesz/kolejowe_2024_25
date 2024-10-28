using cw3_api.Models;

var builder = WebApplication.CreateBuilder(args);

// Dependency injection for the FakeGamesRepo

//builder.Services.AddScoped<IGameRepo,FakeGamesRepo>();
builder.Services.AddScoped<IGameRepo,SqliteGamesRepo>();

//builder.Services.AddSingleton<IGameRepo,FakeGamesRepo>();
//builder.Services.AddTransient<IGameRepo,FakeGamesRepo>();
var app = builder.Build();

app.MapGet("/", () => "Hello World!");
app.MapGet("/games", (IGameRepo repo) => repo.GetGames());
app.MapGet("/games/{id}", (IGameRepo repo, int id) => {
    var game = repo.GetGameById(id);
    return game != null ? Results.Ok(game) : Results.NotFound();
});
app.MapPost("/games", (IGameRepo repo, Game game) => {
    repo.AddGame(game);//wstawienie do bazy danych
    //to co pobrano z body requesta
    return Results.Created($"/games/{game.Id}", game);

});
app.MapDelete("/games/{id}", (IGameRepo repo,int id)=>{
    repo.DeleteGame(id);
    return Results.NoContent();
});

app.Run();
