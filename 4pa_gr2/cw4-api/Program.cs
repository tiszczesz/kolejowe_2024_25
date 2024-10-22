var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();
var colors = new List<string> { "Red", "Green", "Blue" };
app.MapGet("/", () => "Hello World!");
app.MapGet("/colors", () => colors);

app.Run();
