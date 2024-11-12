using cw4_ef.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
//pobranie connection string z appsettings.json
string? connString = builder.Configuration.GetConnectionString("MySql");
//dodanie serwisu do obsługi bazy danych MySql
builder.Services.AddDbContext<ShopDbContext>(options =>
{
    options.UseMySql(connString, ServerVersion.AutoDetect(connString));
});

builder.Services.AddControllersWithViews();
//todo
var app = builder.Build();
app.UseStaticFiles();
//app.MapGet("/", () => "Hello World!");
//app.MapDefaultControllerRoute();//HomeController Index
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Shop}/{action=List}/{id?}");

app.Run();
