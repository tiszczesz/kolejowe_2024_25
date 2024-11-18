using cw4ef.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
//pobranie connection stringa z pliku appsettings.json
var connString = builder.Configuration.GetConnectionString("mysql");
// Add services to the container.
builder.Services.AddControllersWithViews();

//dodanie GameDbContext do serwisów z obsługą mysql db
builder.Services.AddDbContext<GameDbContext>(
    op=>op.UseMySql(connString,ServerVersion.AutoDetect(connString))
    );

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
