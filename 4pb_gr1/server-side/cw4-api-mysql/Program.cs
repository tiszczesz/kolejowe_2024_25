using cw4_api_mysql.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddScoped<IProductsRepo, FileProductsRepo>();

var app = builder.Build();

app.MapGet("/", () => "Hello World!");
app.MapGet("/products", (IProductsRepo repo) => repo.GetProducts());
app.MapGet("/products/{id}", (IProductsRepo repo, int id) =>
{
    var product = repo.GetProductById(id);
    return product != null ? Results.Ok(product) : Results.NotFound();
});
app.MapPost("/products", (IProductsRepo repo, Product product) =>
{
    repo.AddProduct(product);
    return Results.Created($"/products/{product.Id}", product);
});
app.MapPut("/products/{id}", (IProductsRepo repo, int id, Product product) =>
{
    if (repo.GetProductById(id) == null)
        return Results.NotFound();
    product.Id = id;
    repo.UpdateProduct(product);
    return Results.NoContent();
});
app.MapDelete("/products/{id}", (IProductsRepo repo, int id) =>
{
    if (repo.GetProductById(id) == null)
        return Results.NotFound();
    repo.DeleteProduct(id);
    return Results.NoContent();
});

app.Run();
