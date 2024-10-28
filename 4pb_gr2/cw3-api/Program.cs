using cw3_api.Models;

var builder = WebApplication.CreateBuilder(args);

// Dependency injection for the FakeGamesRepo

builder.Services.AddScoped<IGameRepo,FakeGamesRepo>();
//builder.Services.AddSingleton<IGameRepo,FakeGamesRepo>();
//builder.Services.AddTransient<IGameRepo,FakeGamesRepo>();
var app = builder.Build();

app.MapGet("/", () => "Hello World!");
app.MapGet("/games", (IGameRepo repo) => repo.GetGames());
app.MapGet("/games/{id}", (IGameRepo repo, int id) => {
    var game = repo.GetGameById(id);
    return game != null ? Results.Ok(game) : Results.NotFound();
});

app.Run();
