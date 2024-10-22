using cw3_api.Models;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddScoped<IGamesRepo, FakeGamesRepo>();//wstrzykiwanie zależności
var app = builder.Build();

app.MapGet("/", () => "Hello World!");
app.MapGet("/games", (IGamesRepo repo) => repo.GetGames());
app.MapGet("/games/{id}", (IGamesRepo repo, int id) =>{
    var result =  repo.GetGameById(id);
    return result != null ? Results.Ok(result) : Results.NotFound();
    });
app.Run();
