<?php
/**
 * Praktyczny przykład polimorfizmu - System płatności
 * 
 * Ten przykład pokazuje jak polimorfizm jest używany w rzeczywistych aplikacjach.
 * Implementujemy system obsługi różnych metod płatności.
 */

echo "=== PRAKTYCZNY PRZYKŁAD - SYSTEM PŁATNOŚCI ===\n\n";

// Interfejs dla metod płatności
interface MetodaPlatnosci {
    public function przetworzPlatnosc(float $kwota): bool;
    public function getNazwa(): string;
    public function pobierzProwizje(float $kwota): float;
}

// Implementacja płatności kartą kredytową
class PlatnoscKarta implements MetodaPlatnosci {
    private string $numerKarty;
    private string $dataWaznosci;
    
    public function __construct(string $numerKarty, string $dataWaznosci) {
        $this->numerKarty = $numerKarty;
        $this->dataWaznosci = $dataWaznosci;
    }
    
    public function przetworzPlatnosc(float $kwota): bool {
        echo "Przetwarzanie płatności kartą...\n";
        echo "Karta: ****" . substr($this->numerKarty, -4) . "\n";
        echo "Kwota: " . number_format($kwota, 2) . " PLN\n";
        echo "✓ Płatność kartą zakończona pomyślnie\n";
        return true;
    }
    
    public function getNazwa(): string {
        return "Karta kredytowa";
    }
    
    public function pobierzProwizje(float $kwota): float {
        return $kwota * 0.02; // 2% prowizji
    }
}

// Implementacja płatności przez BLIK
class PlatnoscBlik implements MetodaPlatnosci {
    private string $kodBlik;
    
    public function __construct(string $kodBlik) {
        $this->kodBlik = $kodBlik;
    }
    
    public function przetworzPlatnosc(float $kwota): bool {
        echo "Przetwarzanie płatności BLIK...\n";
        echo "Kod BLIK: " . $this->kodBlik . "\n";
        echo "Kwota: " . number_format($kwota, 2) . " PLN\n";
        echo "✓ Płatność BLIK zakończona pomyślnie\n";
        return true;
    }
    
    public function getNazwa(): string {
        return "BLIK";
    }
    
    public function pobierzProwizje(float $kwota): float {
        return 0; // Brak prowizji dla BLIK
    }
}

// Implementacja płatności przelewem bankowym
class PlatnoscPrzelew implements MetodaPlatnosci {
    private string $numerKonta;
    
    public function __construct(string $numerKonta) {
        $this->numerKonta = $numerKonta;
    }
    
    public function przetworzPlatnosc(float $kwota): bool {
        echo "Przetwarzanie przelewu bankowego...\n";
        echo "Konto: " . $this->numerKonta . "\n";
        echo "Kwota: " . number_format($kwota, 2) . " PLN\n";
        echo "✓ Przelew zainicjowany pomyślnie\n";
        return true;
    }
    
    public function getNazwa(): string {
        return "Przelew bankowy";
    }
    
    public function pobierzProwizje(float $kwota): float {
        return 2.50; // Stała prowizja
    }
}

// Implementacja płatności PayPal
class PlatnoscPayPal implements MetodaPlatnosci {
    private string $email;
    
    public function __construct(string $email) {
        $this->email = $email;
    }
    
    public function przetworzPlatnosc(float $kwota): bool {
        echo "Przetwarzanie płatności PayPal...\n";
        echo "Email PayPal: " . $this->email . "\n";
        echo "Kwota: " . number_format($kwota, 2) . " PLN\n";
        echo "✓ Płatność PayPal zakończona pomyślnie\n";
        return true;
    }
    
    public function getNazwa(): string {
        return "PayPal";
    }
    
    public function pobierzProwizje(float $kwota): float {
        return $kwota * 0.035 + 1.50; // 3.5% + 1.50 PLN
    }
}

// Klasa zamówienia wykorzystująca polimorfizm
class Zamowienie {
    private float $kwota;
    private array $produkty;
    
    public function __construct(float $kwota, array $produkty = []) {
        $this->kwota = $kwota;
        $this->produkty = $produkty;
    }
    
    public function zaplac(MetodaPlatnosci $metodaPlatnosci): void {
        echo "\n--- Nowe zamówienie ---\n";
        echo "Kwota zamówienia: " . number_format($this->kwota, 2) . " PLN\n";
        
        $prowizja = $metodaPlatnosci->pobierzProwizje($this->kwota);
        $calkowitaKwota = $this->kwota + $prowizja;
        
        echo "Prowizja: " . number_format($prowizja, 2) . " PLN\n";
        echo "Całkowita kwota: " . number_format($calkowitaKwota, 2) . " PLN\n";
        echo "Metoda płatności: " . $metodaPlatnosci->getNazwa() . "\n\n";
        
        // Polimorfizm - ta sama metoda działa z różnymi metodami płatności
        $metodaPlatnosci->przetworzPlatnosc($calkowitaKwota);
        
        echo "--- Koniec transakcji ---\n";
    }
}

// Demonstracja polimorfizmu w akcji
$zamowienie1 = new Zamowienie(199.99, ["Laptop", "Mysz"]);
$zamowienie2 = new Zamowienie(49.99, ["Książka"]);
$zamowienie3 = new Zamowienie(1299.00, ["Smartfon"]);
$zamowienie4 = new Zamowienie(79.99, ["Klawiatura"]);

// Różne metody płatności
$karta = new PlatnoscKarta("1234567890123456", "12/25");
$blik = new PlatnoscBlik("123456");
$przelew = new PlatnoscPrzelew("PL12345678901234567890123456");
$paypal = new PlatnoscPayPal("user@example.com");

// Polimorfizm - każde zamówienie może użyć dowolnej metody płatności
$zamowienie1->zaplac($karta);
$zamowienie2->zaplac($blik);
$zamowienie3->zaplac($przelew);
$zamowienie4->zaplac($paypal);

echo "\n=== KONIEC PRZYKŁADU ===\n";
echo "\nKorzyści z polimorfizmu:\n";
echo "1. Możemy łatwo dodać nowe metody płatności bez zmiany kodu zamówienia\n";
echo "2. Kod jest bardziej elastyczny i łatwiejszy w utrzymaniu\n";
echo "3. Każda metoda płatności może mieć swoją własną implementację\n";
echo "4. Spełniamy zasadę Open/Closed (otwarty na rozszerzenia, zamknięty na modyfikacje)\n";
?>
