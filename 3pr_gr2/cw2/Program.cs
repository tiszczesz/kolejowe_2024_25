// See https://aka.ms/new-console-template for more information
// Console.WriteLine("Hello, World!");
void cw1()
{
    Console.Write("Podaj a: ");
    int a = Convert.ToInt32(Console.ReadLine());
    Console.WriteLine($"Liczba {a} do kwadratu: {a * a}");
}
void cw2()
{
    Console.Write("Podaj a: ");
    double a = Convert.ToDouble(Console.ReadLine());
    Console.Write("Podaj b: ");
    double b = Convert.ToDouble(Console.ReadLine());
    Console.WriteLine($"{a} + {b}: {a + b}");
    Console.WriteLine($"{a} - {b}: {a - b}");
    Console.WriteLine($"{a} * {b}: {a * b}");
    // Console.WriteLine($"{a} / {b}: {((double)a/b)}");
    if (b != 0)
        Console.WriteLine($"{a} / {b}: {(a / b)}");
    else
        Console.WriteLine($"{a} / {b}: BRAK WYNIKU");
    Console.WriteLine($"{a} / {b}: " 
             + (b != 0 ? (a / b) : "BRAK WYNIKU"));
}


//cw1();
cw2();