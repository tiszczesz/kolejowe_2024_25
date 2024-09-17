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
