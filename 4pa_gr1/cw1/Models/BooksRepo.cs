using System;

namespace cw1.Models;

public class BooksRepo
{
    public static List<Book> GetBooksList()
    {
        return new List<Book>()
        {
            new Book(){Id=1,Title="C#",Author="John",Price=99.99m},
            new Book(){Id=2,Title="Java",Author="Mike",Price=79.99m},
            new Book(){Id=3,Title="Python",Author="Ann",Price=49.99m},
            new Book(){Id=4,Title="JavaScript",Author="Bob",Price=39.99m},
            new Book(){Id=5,Title="C++",Author="David",Price=29.99m},
        };
    }
}
