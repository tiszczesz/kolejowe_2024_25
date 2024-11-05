var builder = WebApplication.CreateBuilder(args);
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
