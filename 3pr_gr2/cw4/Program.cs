//definicja tablicy
int[] tab = new int[10];
int[] tab2 = new int[] { 1, 2, 3, 4, 5 };
//wypełnienie tablicy
for (int i = 0; i < tab.Length; i++)
{
    tab[i] = i * i;
}
//wyświetlenie tablicy
ShowTable(tab);
ShowTable(tab2);

//utworzyc tablice 10 elementową i wypełnić ją napisami
string[] napisy = new string[] { "Ala", "ma", "kota" };
ShowTable(napisy);
void ShowTable<T>(T[] tab)//metoda generyczna
{
    foreach (T element in tab)
    {
        Console.Write(element + " ");
    }
    Console.WriteLine();
}
//napisac funkcje ktora zwraca tablice licz losowych o danym 
//rozmiarze 
Random rand = new Random();
rand.Next(100);//losuje liczbe z przedzialu 0-99
int[] GenerTab(int size){
    int[] result = new int[size];
    for (int i=0; i<size; i++){
        result[i] = rand.Next(100);
    }    
    return result;
}
var numbers = GenerTab(20);
//znajdź największy element w tablicy (funkcja)
//getMax(int[] tab) -> int
//getMin(int[] tab) -> int
int getMax(int[] tab){
    int max = tab[0];
    for (int i=1; i<tab.Length; i++){
        if (tab[i]>max){
            max = tab[i];
        }
    }
    return max;
}
int getMin(int[] tab){
    int min = tab[0];
    for (int i=1; i<tab.Length; i++){
        if (tab[i]<min){
            min = tab[i];
        }
    }
    return min;
}
Console.WriteLine(getMax(numbers)-getMin(numbers));
//wyszukac amplitude tablicy (roznica miedzy najwiekszym i najmniejszym)
//Console.WriteLine(getMax(numbers)-getMin(numbers));
//znajdź sumę elementów tablicy getSum(int[] tab) -> int
//znajdź średnią arytmetyczną elementów tablicy getAvg(int[] tab) -> double
//funkcja generujaca liczby losowe podzielne przez dana liczbe
//generDivBy(int size, int div) -> int[]
//generDivBy(10, 3) -> [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]
int[] generDivBy(int size,int div){
    int[] result = new int[size];
    for (int i=0; i<size; i++){
        result[i] = rand.Next(100)*div;
    }    
    return result;
}
ShowTable(generDivBy(10,7));
//tablica Person