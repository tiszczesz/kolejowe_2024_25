<?php
/**
 * Polimorfizm poprzez dziedziczenie klas
 * 
 * Ten przykład pokazuje jak różne klasy dziedziczące po tej samej klasie bazowej
 * mogą implementować tę samą metodę w różny sposób.
 */

echo "=== POLIMORFIZM POPRZEZ DZIEDZICZENIE KLAS ===\n\n";

// Klasa bazowa (abstrakcyjna)
abstract class Zwierze {
    protected string $imie;
    
    public function __construct(string $imie) {
        $this->imie = $imie;
    }
    
    // Metoda abstrakcyjna - musi być zaimplementowana w klasach potomnych
    abstract public function dajGlos(): string;
    
    // Metoda wspólna dla wszystkich zwierząt
    public function przedstawSie(): void {
        echo "{$this->imie} mówi: {$this->dajGlos()}\n";
    }
}

// Klasy potomne implementujące metodę abstrakcyjną
class Pies extends Zwierze {
    public function dajGlos(): string {
        return "Hau hau!";
    }
}

class Kot extends Zwierze {
    public function dajGlos(): string {
        return "Miau!";
    }
}

class Krowa extends Zwierze {
    public function dajGlos(): string {
        return "Muuu!";
    }
}

class Kaczka extends Zwierze {
    public function dajGlos(): string {
        return "Kwa kwa!";
    }
}

// Funkcja demonstrująca polimorfizm
// Przyjmuje obiekt typu Zwierze, ale może to być dowolna klasa potomna
function przedstawZwierze(Zwierze $zwierze): void {
    $zwierze->przedstawSie();
}

// Tworzenie obiektów różnych klas
$zwierzeta = [
    new Pies("Burek"),
    new Kot("Mruczek"),
    new Krowa("Kasia"),
    new Kaczka("Donald")
];

// Polimorfizm w akcji - ta sama funkcja działa z różnymi typami obiektów
echo "Prezentacja zwierząt:\n";
foreach ($zwierzeta as $zwierze) {
    przedstawZwierze($zwierze);
}

echo "\n--- Bezpośrednie wywołania ---\n";
$burek = new Pies("Burek");
$mruczek = new Kot("Mruczek");

echo "Pies: " . $burek->dajGlos() . "\n";
echo "Kot: " . $mruczek->dajGlos() . "\n";

echo "\n=== KONIEC PRZYKŁADU ===\n";
?>
