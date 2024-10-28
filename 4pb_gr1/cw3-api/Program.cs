using cw3_api.Models;

var builder = WebApplication.CreateBuilder(args);
/*
    
    AddTransient: Transient lifetime services are created each time they are requested. This lifetime works best for lightweight, stateless services.
    AddScoped: Scoped lifetime services are created once per request.
    AddSingleton: Singleton lifetime services are created the first time they are requested (or when ConfigureServices is run if you specify an instance there) and then every subsequent request will use the same instance.

*/
// Add services to the container.
//wstrzykiwanie zależności IMoviesRepo jako FakeMoviesRepo
//builder.Services.AddTransient<IMoviesRepo, FakeMoviesRepo>();
builder.Services.AddScoped<IMoviesRepo, SqliteMoviesRepo>();
//builder.Services.AddSingleton<IMoviesRepo, FakeMoviesRepo>();



var app = builder.Build();

app.MapGet("/", () => "Hello World!");
app.MapGet("/api/movies", (IMoviesRepo moviesRepo) => moviesRepo.GetMovies());
app.MapGet("/api/movies/{id}", (IMoviesRepo moviesRepo, int id) => {
    var movie = moviesRepo.GetMovieById(id);
    return movie != null ? Results.Ok(movie) 
          : Results.NotFound();
});
app.MapPost("/api/movies",(IMoviesRepo repo,Movie movie)=>{
    repo.AddMovie(movie);
    //return Results.Ok();
    //sprawdzic czy dodano film
    return Results.Created($"/api/movies/{movie.Id}",movie);
});


app.Run();
