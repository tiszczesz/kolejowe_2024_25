using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace cw5ef.Migrations
{
    /// <inheritdoc />
    public partial class First : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Cars",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    CarModel = table.Column<string>(type: "TEXT", nullable: true),
                    CarBrand = table.Column<string>(type: "TEXT", nullable: true),
                    Price = table.Column<decimal>(type: "dotnet ef", nullable: true),
                    ProductionDate = table.Column<DateOnly>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cars", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Cars",
                columns: new[] { "Id", "CarBrand", "CarModel", "Price", "ProductionDate" },
                values: new object[,]
                {
                    { 1, "Opel", "Astra", 50000m, new DateOnly(2010, 10, 10) },
                    { 2, "Opel", "Corsa", 30000m, new DateOnly(2015, 10, 10) },
                    { 3, "Volkswagen", "Golf", 60000m, new DateOnly(2018, 10, 10) },
                    { 4, "Volkswagen", "Passat", 80000m, new DateOnly(2019, 10, 10) },
                    { 5, "Audi", "A4", 120000m, new DateOnly(2020, 10, 10) }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Cars");
        }
    }
}
