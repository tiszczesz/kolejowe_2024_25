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

//dodanie cors
builder.Services.AddCors(options=>{
    options.AddPolicy("CorsPolicy",builder=>builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
});
builder.Services.AddScoped<IMoviesRepo, SqliteMoviesRepo>();
//builder.Services.AddSingleton<IMoviesRepo, FakeMoviesRepo>();



var app = builder.Build();
app.UseCors("CorsPolicy");
app.MapGet("/", () => "Hello World!");
app.MapGet("/api/movies", (IMoviesRepo moviesRepo) => moviesRepo.GetMovies());
app.MapGet("/api/movies/{id}", (IMoviesRepo moviesRepo, int id) => {
    var movie = moviesRepo.GetMovieById(id);
    return movie != null ? Results.Ok(movie) 
          : Results.NotFound();
});
app.MapPost("/api/movies",(IMoviesRepo moviesRepo,Movie movie)=>{
    moviesRepo.AddMovie(movie);
    //return Results.Ok();
    //sprawdzic czy dodano film
    return Results.Created($"/api/movies/{movie.Id}",movie);
});
app.MapDelete("/api/movies/{id}",(IMoviesRepo moviesRepo,int id)=>{
    if(moviesRepo.GetMovieById(id) == null){
        return Results.NotFound();
    }
    moviesRepo.DeleteMovie(id);
    return Results.Ok();
});
app.MapPut("/api/movies/{id}",(IMoviesRepo moviesRepo,int id,Movie movie)=>{
    if(moviesRepo.GetMovieById(id) == null){
        return Results.NotFound();
    }
    movie.Id = id;
    moviesRepo.UpdateMovie(movie);
    return Results.Ok();
});

app.Run();
