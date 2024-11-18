﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using cw4_ef.Models;

#nullable disable

namespace cw4_ef.Migrations
{
    [DbContext(typeof(ShopDbContext))]
    partial class ShopDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.10")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            MySqlModelBuilderExtensions.AutoIncrementColumns(modelBuilder);

            modelBuilder.Entity("cw4_ef.Models.Product", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    MySqlPropertyBuilderExtensions.UseMySqlIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Category")
                        .HasColumnType("longtext");

                    b.Property<DateOnly?>("DateAdded")
                        .HasColumnType("date");

                    b.Property<string>("Description")
                        .HasColumnType("longtext");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<decimal?>("Price")
                        .HasColumnType("decimal(65,30)");

                    b.HasKey("Id");

                    b.ToTable("Products");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Category = "Kategoria 1",
                            DateAdded = new DateOnly(2021, 10, 1),
                            Description = "Opis produktu 1",
                            Name = "Produkt 1",
                            Price = 100m
                        },
                        new
                        {
                            Id = 2,
                            Category = "Kategoria 2",
                            DateAdded = new DateOnly(2021, 10, 2),
                            Description = "Opis produktu 2",
                            Name = "Produkt 2",
                            Price = 200m
                        },
                        new
                        {
                            Id = 3,
                            Category = "Kategoria 3",
                            DateAdded = new DateOnly(2021, 10, 3),
                            Description = "Opis produktu 3",
                            Name = "Produkt 3",
                            Price = 300m
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
