<?php
/**
 * Demonstracja wszystkich przykładów polimorfizmu w PHP
 * 
 * Ten plik uruchamia wszystkie przykłady jeden po drugim.
 */

echo "╔════════════════════════════════════════════════════════════════╗\n";
echo "║         POLIMORFIZM W PHP - KOMPLETNA DEMONSTRACJA            ║\n";
echo "╚════════════════════════════════════════════════════════════════╝\n\n";

echo "Ten skrypt demonstruje różne aspekty polimorfizmu w PHP:\n";
echo "1. Polimorfizm poprzez dziedziczenie klas\n";
echo "2. Polimorfizm poprzez interfejsy\n";
echo "3. Praktyczny przykład - system płatności\n\n";

echo "Naciśnij Enter, aby rozpocząć demonstrację...\n";
// fgets(STDIN); // Odkomentuj jeśli chcesz pauzy

echo "\n";
echo str_repeat("=", 70) . "\n";
echo "PRZYKŁAD 1: POLIMORFIZM POPRZEZ DZIEDZICZENIE KLAS\n";
echo str_repeat("=", 70) . "\n\n";

include 'polimorfizm_klasy.php';

echo "\n\n";
echo str_repeat("=", 70) . "\n";
echo "PRZYKŁAD 2: POLIMORFIZM POPRZEZ INTERFEJSY\n";
echo str_repeat("=", 70) . "\n\n";

include 'polimorfizm_interfejsy.php';

echo "\n\n";
echo str_repeat("=", 70) . "\n";
echo "PRZYKŁAD 3: PRAKTYCZNY PRZYKŁAD - SYSTEM PŁATNOŚCI\n";
echo str_repeat("=", 70) . "\n\n";

include 'polimorfizm_praktyczny.php';

echo "\n\n";
echo "╔════════════════════════════════════════════════════════════════╗\n";
echo "║                    KONIEC DEMONSTRACJI                         ║\n";
echo "╚════════════════════════════════════════════════════════════════╝\n\n";

echo "PODSUMOWANIE POLIMORFIZMU W PHP:\n\n";

echo "✓ Polimorfizm pozwala traktować obiekty różnych klas w jednolity sposób\n";
echo "✓ Możemy używać tego samego interfejsu dla różnych implementacji\n";
echo "✓ Kod staje się bardziej elastyczny i łatwiejszy w utrzymaniu\n";
echo "✓ Ułatwia rozszerzanie aplikacji o nowe funkcjonalności\n\n";

echo "KLUCZOWE KONCEPCJE:\n\n";
echo "1. ABSTRAKCJA - definiowanie wspólnego interfejsu\n";
echo "2. DZIEDZICZENIE - rozszerzanie funkcjonalności klasy bazowej\n";
echo "3. INTERFEJSY - definiowanie kontraktów dla klas\n";
echo "4. NADPISYWANIE METOD - dostosowywanie zachowania w klasach potomnych\n\n";

echo "ZALETY POLIMORFIZMU:\n\n";
echo "• Zwiększa elastyczność kodu\n";
echo "• Ułatwia testowanie (możliwość używania mocków)\n";
echo "• Zmniejsza zależności między komponentami\n";
echo "• Wspiera zasadę Open/Closed z SOLID\n";
echo "• Umożliwia tworzenie modularnych systemów\n\n";

?>
