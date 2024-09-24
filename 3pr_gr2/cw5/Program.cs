using cw5.Models;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddRazorPages();
var app = builder.Build();

app.UseStaticFiles();
var p = new Person { 
    FirstName = "Jan", 
    LastName = "Kowalski", 
    Age = 20 
};
app.MapRazorPages();
// app.MapGet("/", () => "Hello World!");
// app.MapGet("/time", () => DateTime.Now.ToString());
// app.MapGet("/strona1", () => "to jest strona 1");
// app.MapGet("/strona2", () => p);
// app.MapGet("/persons", () => GetPersons());
app.Run();

