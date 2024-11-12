using Microsoft.EntityFrameworkCore;

namespace vs2022_ex_sqlite.Models
{
    public class ProductsDbContext:DbContext
    {
        public ProductsDbContext(DbContextOptions<ProductsDbContext> options)
        :base(options)
        {    
        }
        public DbSet<Product> Products { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Product>().HasData(
                new Product { Id =1 ,Name="Porodukt 1",Price=23.89m},
                new Product { Id =2 ,Name="Porodukt 2",Price=23.89m},
                new Product { Id =3 ,Name="Porodukt 3",Price=23.89m},
                new Product { Id =4 ,Name="Porodukt 4",Price=23.89m}
                
             );

        }
    }
}
