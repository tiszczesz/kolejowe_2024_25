using System;

namespace cw9_db.Models;

public class MyBooks
{
    public static List<string> GetBooks(){
        return new List<string> { "książka1","książka2","książka3"};
    }
}
