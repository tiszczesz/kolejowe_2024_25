using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cezar.Domain
{
    public class CezarCipher
    {
        public string Text { get; set; }
        public int Key { get; set; }

        public CezarCipher(string text, int key)
        {
            Text = text;
            Key = key;
        }

        public string Encode()
        {
            return Shift(Text, Key);
        }

        public string Decode()
        {
            return Shift(Text, -Key);
        }

        private string Shift(string input, int key)
        {
            StringBuilder result = new StringBuilder();
            int normalizedKey = ((key % 26) + 26) % 26; // ensures key is always positive and in [0,25]
            foreach (char c in input)
            {
                if (char.IsLetter(c))
                {
                    char offset = char.IsUpper(c) ? 'A' : 'a';
                    char shifted = (char)(((c - offset + normalizedKey) % 26) + offset);
                    result.Append(shifted);
                }
                else
                {
                    result.Append(c);
                }
            }
            return result.ToString();
        }
    }
}
