<?php
/**
 * Polimorfizm poprzez interfejsy
 * 
 * Ten przykład pokazuje jak różne klasy mogą implementować ten sam interfejs,
 * zapewniając różne implementacje tych samych metod.
 */

echo "=== POLIMORFIZM POPRZEZ INTERFEJSY ===\n\n";

// Interfejs definiujący kontrakt dla kształtów
interface Ksztalt {
    public function obliczPole(): float;
    public function obliczObwod(): float;
    public function getNazwa(): string;
}

// Różne klasy implementujące interfejs Ksztalt
class Kwadrat implements Ksztalt {
    private float $bok;
    
    public function __construct(float $bok) {
        $this->bok = $bok;
    }
    
    public function obliczPole(): float {
        return $this->bok * $this->bok;
    }
    
    public function obliczObwod(): float {
        return 4 * $this->bok;
    }
    
    public function getNazwa(): string {
        return "Kwadrat";
    }
}

class Prostokat implements Ksztalt {
    private float $szerokosc;
    private float $wysokosc;
    
    public function __construct(float $szerokosc, float $wysokosc) {
        $this->szerokosc = $szerokosc;
        $this->wysokosc = $wysokosc;
    }
    
    public function obliczPole(): float {
        return $this->szerokosc * $this->wysokosc;
    }
    
    public function obliczObwod(): float {
        return 2 * ($this->szerokosc + $this->wysokosc);
    }
    
    public function getNazwa(): string {
        return "Prostokąt";
    }
}

class Kolo implements Ksztalt {
    private float $promien;
    
    public function __construct(float $promien) {
        $this->promien = $promien;
    }
    
    public function obliczPole(): float {
        return pi() * $this->promien * $this->promien;
    }
    
    public function obliczObwod(): float {
        return 2 * pi() * $this->promien;
    }
    
    public function getNazwa(): string {
        return "Koło";
    }
}

class Trojkat implements Ksztalt {
    private float $a;
    private float $b;
    private float $c;
    
    public function __construct(float $a, float $b, float $c) {
        $this->a = $a;
        $this->b = $b;
        $this->c = $c;
    }
    
    public function obliczPole(): float {
        // Wzór Herona
        $s = ($this->a + $this->b + $this->c) / 2;
        return sqrt($s * ($s - $this->a) * ($s - $this->b) * ($s - $this->c));
    }
    
    public function obliczObwod(): float {
        return $this->a + $this->b + $this->c;
    }
    
    public function getNazwa(): string {
        return "Trójkąt";
    }
}

// Funkcja wykorzystująca polimorfizm - działa z każdym obiektem implementującym interfejs Ksztalt
function wyswietlInformacje(Ksztalt $ksztalt): void {
    echo $ksztalt->getNazwa() . ":\n";
    echo "  Pole: " . number_format($ksztalt->obliczPole(), 2) . "\n";
    echo "  Obwód: " . number_format($ksztalt->obliczObwod(), 2) . "\n\n";
}

// Funkcja obliczająca całkowite pole wszystkich kształtów
function obliczCalkowitePole(array $ksztalty): float {
    $suma = 0;
    foreach ($ksztalty as $ksztalt) {
        // Każdy obiekt musi implementować interfejs Ksztalt
        if ($ksztalt instanceof Ksztalt) {
            $suma += $ksztalt->obliczPole();
        }
    }
    return $suma;
}

// Tworzenie różnych kształtów
$ksztalty = [
    new Kwadrat(5),
    new Prostokat(4, 6),
    new Kolo(3),
    new Trojkat(3, 4, 5)
];

// Polimorfizm - ta sama funkcja działa z różnymi typami
echo "Informacje o kształtach:\n\n";
foreach ($ksztalty as $ksztalt) {
    wyswietlInformacje($ksztalt);
}

// Obliczanie całkowitego pola
$calkowitePole = obliczCalkowitePole($ksztalty);
echo "Całkowite pole wszystkich kształtów: " . number_format($calkowitePole, 2) . "\n";

echo "\n=== KONIEC PRZYKŁADU ===\n";
?>
