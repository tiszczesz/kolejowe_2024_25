using cw3_api.Models;

var builder = WebApplication.CreateBuilder(args);

//konfiguracja CORS  dla przyszłego klienta np REACT na locahost
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "MyPolicy", builder =>
    {
        builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
    });
});

//konstruktor wstrzykiwany bez argumentów
builder.Services.AddScoped<IGamesRepo, SqliteGameRepo>();//wstrzykiwanie zależności
// Konfiguracja wstrzykiwania zależności z argumentem
// builder.Services.AddScoped<IGamesRepo>(provider =>
// {
//     var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
//     return new GamesRepo(connectionString);
// });

//IGamesRepo repo = new FakeGamesRepo();//bez użycia wstrzykiwania zależności
//IGamesRepo repo = new SqliteGameRepo(builder.Configuration);//bez użycia wstrzykiwania zależności
var app = builder.Build();

// uzycie CORS
app.UseCors("MyPolicy");

//bez wstrzykiwania zależności
// app.MapGet("/", () => "Hello World!");
// app.MapGet("/games", () => repo.GetGames());
// app.MapGet("/games/{id}", (int id) =>
// {
//     var result = repo.GetGameById(id);
//     return result != null ? Results.Ok(result) : Results.NotFound();
// });
// app.MapDelete("/games/{id}", (int id) =>
// {
//     repo.DeleteGame(id);
//     return Results.NoContent();
// });
// app.MapPost("/games", (Game game) =>
// {
//     repo.AddGame(game);
//     return Results.Created($"/games/{game.Id}", game);
// });

// app.MapPut("/games/{id}", (Game game, int id) =>
// {
//     if (repo.GetGameById(id) == null)
//     {
//         return Results.NotFound();
//     }
//     game.Id = id;
//     repo.UpdateGame(game);
//     return Results.NoContent();
// });
// app.Run();

//gdy jest wstrzykiwanie zależności
app.MapGet("/", () => "Hello World!");
app.MapGet("/games", (IGamesRepo repo) => repo.GetGames());
app.MapGet("/games/{id}", (IGamesRepo repo, int id) =>{
    var result =  repo.GetGameById(id);
    return result != null ? Results.Ok(result) : Results.NotFound();
    });
app.MapDelete("/games/{id}", (IGamesRepo repo,int id) =>{
    repo.DeleteGame(id);
    return Results.NoContent();
    });

app.MapPost("/games", (IGamesRepo repo,Game game) =>
{
    repo.AddGame(game);
    return Results.Created($"/games/{game.Id}", game);
});

app.MapPut("/games/{id}", (IGamesRepo repo,Game game, int id) =>
{
    if (repo.GetGameById(id) == null)
    {
        return Results.NotFound();
    }
    game.Id = id;
    repo.UpdateGame(game);
    return Results.NoContent();
});
app.Run();
