class NWD:
    @staticmethod
    def oblicz(a, b):
        a = abs(a)
        b = abs(b)
        """Zwraca największy wspólny dzielnik (NWD) liczb a i b."""
        if a < 0 or b < 0:
            raise ValueError("Liczby muszą być nieujemne.")
        if a == 0 and b == 0:
            raise ValueError("NWD nie jest zdefiniowane dla obu liczb równych zero.")
        if a == 0:
            return abs(b)
        if b == 0:
            return abs(a)
        while b != 0:
            a, b = b, a % b
        return abs(a)