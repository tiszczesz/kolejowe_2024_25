using cw3_api.Models;

var builder = WebApplication.CreateBuilder(args);
//konstruktor wstrzykiwany bez argumentów
//builder.Services.AddScoped<IGamesRepo, SqliteGameRepo>();//wstrzykiwanie zależności
// Konfiguracja wstrzykiwania zależności z argumentem
// builder.Services.AddScoped<IGamesRepo>(provider =>
// {
//     var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
//     return new GamesRepo(connectionString);
// });
//IGamesRepo repo = new FakeGamesRepo();//bez użycia wstrzykiwania zależności
IGamesRepo repo = new SqliteGameRepo();//bez użycia wstrzykiwania zależności
var app = builder.Build();




app.MapGet("/", () => "Hello World!");
app.MapGet("/games", () => repo.GetGames());
app.MapGet("/games/{id}", ( int id) =>{
    var result =  repo.GetGameById(id);
    return result != null ? Results.Ok(result) : Results.NotFound();
    });
app.Run();

//gdy jest wstrzykiwanie zależności
// app.MapGet("/", () => "Hello World!");
// app.MapGet("/games", (IGamesRepo repo) => repo.GetGames());
// app.MapGet("/games/{id}", (IGamesRepo repo, int id) =>{
//     var result =  repo.GetGameById(id);
//     return result != null ? Results.Ok(result) : Results.NotFound();
//     });
// app.Run();
