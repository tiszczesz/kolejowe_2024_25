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
    try{
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
    }catch(FormatException ex){
        Console.WriteLine(ex.Message);
    }
    
}

void cw3(){
    //podaj liczbe
    //sprawdz czy nieujemna
    //podaj wynik Math.Sqrt()
    //lub napisz ze brak wyniku
}
void cw4(){
    //oblicz pierwiaski funkcji kwadratowej
    //podaj a
    //podaj b
    //podaj c
    //a x^2 + b x + c = 0
    //x = (-b +- sqrt(b^2 - 4ac) ) / 2a
    //Math.Pow(2, 2);
    //x^2-9
    // if()
    // else if()
    // else
}
//cw1();
cw2();
//cw3();