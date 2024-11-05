# Tworzenie aplikacji webowej z entity framework
1. Utworzenie aplikacji:
```console
dotnet new web -o nazwaApliakcji

```
2. Dodanie pakietów do obsługi EF
   1. Entity Framework Core Tools 
   2. Pomelo's MySQL database provider for Entity Framework Core
3. Używamy podejścia code first klasy w C# potem baza danych
   1. katalogi:
      1. wwwroot
      2. Controllers
      3. Views
      4. Models
4. Ustawiamy w Program.cs obsługę mvc
```cs
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

```
5. tworzymy kontroler Shop o nazwie ShopController
```cs
using Microsoft.AspNetCore.Mvc;

namespace cw4_ef.Controllers
{
    public class ShopController : Controller
    {
        // GET: ShopController
        public ActionResult List()
        {
            return View();
        }

    }
}
```

6. Dodajemy do Views katalog Shop i Shared
7. W Shared tworzymy _Layout.cshtml
8. W Views tworzymy _ViewImports.cshtml i _ViewStart.cshtml
9. W Views/Shop dodajemy widok List.cshtml
10. W Models tworzymy klasę Product.cs i ShopDbContext.cs 