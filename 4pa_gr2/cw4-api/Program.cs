using cw4_api.Models;

var builder = WebApplication.CreateBuilder(args);
//wstrzykiwanie zależności
//builder.Services.AddScoped<IGameRepo,FakeGamesRepo>();
builder.Services.AddScoped<IGameRepo,SqliteGamesRepo>();

var app = builder.Build();
// var colors = new List<string> { "Red", "Green", "Blue" };
app.MapGet("/", () => "Hello World!");
// app.MapGet("/colors", () => colors);
app.MapGet("/games",(IGameRepo repo) =>repo.GetGames());
app.MapGet("/games/{id}",((IGameRepo repo,int id)=>{
    var game = repo.GetGameById(id);
    return game!=null ? Results.Ok(game) : Results.NotFound();
}));
app.Run();
