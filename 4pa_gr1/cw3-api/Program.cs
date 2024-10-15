using cw3_api.Models;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddScoped<IGamesRepo, FakeGamesRepo>();
var app = builder.Build();

app.MapGet("/", () => "Hello World!");
app.MapGet("/games", (IGamesRepo repo) => repo.GetGames());
app.Run();
