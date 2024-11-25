using System;

namespace cw7.Models;

public class Primes
{
    private static bool IsPrime(int number){
        if (number < 2) return false;
        for(int i=2;i*i<=number;i++){
            if(number%i==0) return false;
        }
        return true;
    }
    // zwraca ilosc podana liczb pierwszych
    public static List<int> GetPrimes(int count){
        List<int> primes = new();
        //todo: implement
        return primes;
    }
}
