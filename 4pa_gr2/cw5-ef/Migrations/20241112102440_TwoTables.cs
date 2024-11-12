using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace cw5_ef.Migrations
{
    /// <inheritdoc />
    public partial class TwoTables : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "LastName",
                table: "People",
                type: "varchar(60)",
                maxLength: 60,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "longtext")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<string>(
                name: "FirstName",
                table: "People",
                type: "varchar(50)",
                maxLength: 50,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "longtext")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<int>(
                name: "WorkPlaceId",
                table: "People",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "WorkerPlaces",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Address = table.Column<string>(type: "longtext", nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Description = table.Column<string>(type: "longtext", nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WorkerPlaces", x => x.Id);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.UpdateData(
                table: "People",
                keyColumn: "Id",
                keyValue: 1,
                column: "WorkPlaceId",
                value: 1);

            migrationBuilder.UpdateData(
                table: "People",
                keyColumn: "Id",
                keyValue: 2,
                column: "WorkPlaceId",
                value: 1);

            migrationBuilder.UpdateData(
                table: "People",
                keyColumn: "Id",
                keyValue: 3,
                column: "WorkPlaceId",
                value: 2);

            migrationBuilder.UpdateData(
                table: "People",
                keyColumn: "Id",
                keyValue: 4,
                column: "WorkPlaceId",
                value: 3);

            migrationBuilder.InsertData(
                table: "WorkerPlaces",
                columns: new[] { "Id", "Address", "Description" },
                values: new object[,]
                {
                    { 1, "ul. Klonowa 1", "Firma zajmująca się produkcją mebli" },
                    { 2, "ul. Dębowa 2", "Firma zajmująca się produkcją okien" },
                    { 3, "ul. Sosnowa 3", "Firma zajmująca się produkcją drzwi" },
                    { 4, "ul. Brzozowa 4", "Firma zajmująca się produkcją podłóg" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_People_WorkPlaceId",
                table: "People",
                column: "WorkPlaceId");

            migrationBuilder.AddForeignKey(
                name: "FK_People_WorkerPlaces_WorkPlaceId",
                table: "People",
                column: "WorkPlaceId",
                principalTable: "WorkerPlaces",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_People_WorkerPlaces_WorkPlaceId",
                table: "People");

            migrationBuilder.DropTable(
                name: "WorkerPlaces");

            migrationBuilder.DropIndex(
                name: "IX_People_WorkPlaceId",
                table: "People");

            migrationBuilder.DropColumn(
                name: "WorkPlaceId",
                table: "People");

            migrationBuilder.AlterColumn<string>(
                name: "LastName",
                table: "People",
                type: "longtext",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(60)",
                oldMaxLength: 60)
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<string>(
                name: "FirstName",
                table: "People",
                type: "longtext",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(50)",
                oldMaxLength: 50)
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");
        }
    }
}
