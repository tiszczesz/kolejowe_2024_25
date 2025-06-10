import unittest
from Nwd import NWD

class TestNWD(unittest.TestCase):
    def test_oblicz_typical(self):
        self.assertEqual(NWD.oblicz(48, 18), 6)
        self.assertEqual(NWD.oblicz(18, 48), 6)
        self.assertEqual(NWD.oblicz(100, 25), 25)
        self.assertEqual(NWD.oblicz(17, 13), 1)

    def test_oblicz_zero(self):
        self.assertEqual(NWD.oblicz(0, 5), 5)
        self.assertEqual(NWD.oblicz(5, 0), 5)
        # self.assertEqual(NWD.oblicz(0, 0), 0)

    def test_oblicz_negative(self):
        self.assertEqual(NWD.oblicz(-48, 18), 6)
        self.assertEqual(NWD.oblicz(48, -18), 6)
        self.assertEqual(NWD.oblicz(-48, -18), 6)

    def test_oblicz_one(self):
        self.assertEqual(NWD.oblicz(1, 999), 1)
        self.assertEqual(NWD.oblicz(999, 1), 1)

if __name__ == '__main__':
    unittest.main()