using cw4_api.Models;

var builder = WebApplication.CreateBuilder(args);
//wstrzykiwanie zależności
//builder.Services.AddScoped<IGameRepo,FakeGamesRepo>();
builder.Services.AddScoped<IGameRepo,SqliteGamesRepo>();
//IGameRepo repo = new SqliteGamesRepo(builder.Configuration);
var app = builder.Build();
// var colors = new List<string> { "Red", "Green", "Blue" };
app.MapGet("/", () => "Hello World!");
// app.MapGet("/colors", () => colors);
app.MapGet("/games",(IGameRepo repo) =>repo.GetGames());
app.MapGet("/games/{id}",((IGameRepo repo,int id)=>{
    var game = repo.GetGameById(id);
    return game!=null ? Results.Ok(game) : Results.NotFound();
}));
app.MapPost("/games",(IGameRepo repo,Game game)=>{
    repo.AddGame(game);
    return Results.Created($"/games/{game.Id}",game);
});
app.MapDelete("/games/{id}",(IGameRepo repo,int id)=>{
    repo.DeleteGame(id);
    return Results.NoContent();
});
app.MapPut("/games/{id}",(IGameRepo repo,int id,Game game)=>{
    if(repo.GetGameById(id) == null) return Results.NotFound();
    game.Id = id;
    repo.UpdateGame(game);
    return Results.NoContent();
});
app.Run();
