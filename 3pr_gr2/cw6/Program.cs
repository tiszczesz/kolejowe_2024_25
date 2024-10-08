var builder = WebApplication.CreateBuilder(args);
builder.Services.AddRazorPages();
var app = builder.Build();
app.UseStaticFiles();
// app.MapGet("/", () => "Hello World!");
app.MapRazorPages();//Pages i strona Index.cshtml
app.Run();
