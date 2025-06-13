namespace Cezar.Tests
{
    public class Tests
    {
        [SetUp]
        public void Setup()
        {
        }

        [Test]
        public void If_set_key_2_to_A_and_a()
        {
            //Arrange
            var cipher = new Cezar.Domain.CezarCipher("A a", 2);
            //Act
            var encoded = cipher.Encode();
            var decoded = cipher.Decode();
            //Assert
            Assert.That(encoded, Is.EqualTo("C c"));
            Assert.That(decoded, Is.EqualTo("Y y"));
            Assert.That(encoded, Is.Not.EqualTo("A a"));
            Assert.Pass();
        }

        [Test]
        public void If_text_encode_dont_change_length()
        {
            //Arrange
            var cipher = new Cezar.Domain.CezarCipher("Ala ma kota", 2);
            //Act
            var encoded = cipher.Encode();
            var decoded = cipher.Decode();
            //Assert
            Assert.That(encoded.Length, Is.EqualTo("Ala ma kota".Length));
        }

        [Test]
        public void If_no_decode_other_char()
        {
            //Arrange
            var cipher = new Cezar.Domain.CezarCipher("Ala (ma) kota", 1);
            //Act
            var encoded = cipher.Encode();
            var decoded = cipher.Decode();
            //Assert
            Assert.That(encoded, Is.EqualTo("Bmb (nb) lpub"));
        }

        [Test]
        public void If_key_is_0_text_should_not_change()
        {
            //Arrange
            var cipher = new Cezar.Domain.CezarCipher("Ala ma kota", 0);
            //Act
            var encoded = cipher.Encode();
            var decoded = cipher.Decode();
            //Assert
            Assert.That(encoded, Is.EqualTo("Ala ma kota"));
            Assert.That(decoded, Is.EqualTo("Ala ma kota"));
        }

        [Test]
        public void If_key_is_26_text_should_not_change()
        {
            //Arrange
            var cipher = new Cezar.Domain.CezarCipher("Ala ma kota", 26);
            //Act
            var encoded = cipher.Encode();
            var decoded = cipher.Decode();
            //Assert
            Assert.That(encoded, Is.EqualTo("Ala ma kota"));
            Assert.That(decoded, Is.EqualTo("Ala ma kota"));
        }

        [Test]
        public void If_key_is_27_text_should_change()
        {
            //Arrange
            var cipher = new Cezar.Domain.CezarCipher("Ala ma kota", 27);
            //Act
            var encoded = cipher.Encode();
            var decoded = cipher.Decode();
            //Assert
            Assert.That(encoded, Is.EqualTo("Bmb nb lpub"));
            Assert.That(decoded, Is.EqualTo("Zkz lz jnsz"));
        }
        [Test]
        public void If_key_is_minus_1_text_should_change()
        {
            //Arrange
            var cipher = new Cezar.Domain.CezarCipher("Ala ma kota", -1);
            //Act
            var encoded = cipher.Encode();
            var decoded = cipher.Decode();
            //Assert
            Assert.That(encoded, Is.EqualTo("Zkz lz jnsz"));
            Assert.That(decoded, Is.EqualTo("Bmb nb lpub"));
        }
    }

}
