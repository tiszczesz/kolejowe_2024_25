using System;

namespace cw9_db.Models;

public class ColorsRepo
{
    public static List<MyColor> GetColors(){
        return new List<MyColor> {
            new MyColor{Value="biały",Key="white"},
            new MyColor{Value="czarny",Key="black"},
            new MyColor{Value="czerwony",Key="red"},
            new MyColor{Value="żółty",Key="yellow"},
            new MyColor{Value="niebieski",Key="blue"}        
        };
    }
}
