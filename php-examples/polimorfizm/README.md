# Polimorfizm w PHP

Ten katalog zawiera przykłady demonstrujące koncepcję polimorfizmu w PHP.

## Zawartość

1. **polimorfizm_klasy.php** - Polimorfizm poprzez dziedziczenie klas
2. **polimorfizm_interfejsy.php** - Polimorfizm poprzez interfejsy
3. **polimorfizm_praktyczny.php** - Praktyczny przykład z systemem płatności
4. **demo.php** - Demonstracja wszystkich przykładów

## Uruchomienie

```bash
php demo.php
```

Lub uruchom poszczególne pliki:

```bash
php polimorfizm_klasy.php
php polimorfizm_interfejsy.php
php polimorfizm_praktyczny.php
```

## Czym jest polimorfizm?

Polimorfizm (z gr. "wiele form") to zdolność obiektów różnych klas do reagowania na te same komunikaty (wywołania metod) w różny sposób. Jest to jedna z podstawowych zasad programowania obiektowego (OOP).

### Rodzaje polimorfizmu w PHP:

1. **Polimorfizm poprzez dziedziczenie** - klasy potomne nadpisują metody klasy bazowej
2. **Polimorfizm poprzez interfejsy** - różne klasy implementują ten sam interfejs
3. **Polimorfizm ad-hoc** - przeciążanie metod (limitowane w PHP)
