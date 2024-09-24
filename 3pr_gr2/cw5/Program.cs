using cw5.Models;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.UseStaticFiles();
var p = new Person { 
    FirstName = "Jan", 
    LastName = "Kowalski", 
    Age = 20 
};

app.MapGet("/", () => "Hello World!");
app.MapGet("/time", () => DateTime.Now.ToString());
app.MapGet("/strona1", () => "to jest strona 1");
app.MapGet("/strona2", () => p);
app.MapGet("/persons", () => GetPersons());
app.Run();

List<Person> GetPersons(){
    var list = new List<Person>();
    list.Add(new Person { FirstName = "Jan", LastName = "Kowalski", Age = 20 });
    list.Add(new Person { FirstName = "Anna", LastName = "Nowak", Age = 30 });
    list.Add(new Person { FirstName = "Andrzej", LastName = "Nowak", Age = 40 });
    list.Add(new Person { FirstName = "Dominik", LastName = "Nowak", Age = 40 });
    return list;
}