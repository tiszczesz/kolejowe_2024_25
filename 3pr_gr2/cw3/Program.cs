// See https://aka.ms/new-console-template for more information

Person p1 = new Person();//konstruktor domyślny
Person p2 = new Person("Jan", "Kowalski");//konstruktor z parametrami
p1.Firstname = "Adam";
p1.Lastname = "Nowak";
p1.Age = -10;

Console.WriteLine(p1);
Console.WriteLine(p2);
