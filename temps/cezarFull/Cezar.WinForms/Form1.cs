using Cezar.Domain;

namespace Cezar.WinForms
{
    public partial class Form1 : Form
    {
        private CezarCipher _cezar;
        public Form1()
        {
            InitializeComponent();
        }
        private void Code()
        {
            string inputText = tbInput.Text; // Get input from textBox1
            int key = (int)numericUpDown1.Value; // Get key from numericUpDown1
            _cezar = new CezarCipher(inputText, key); // Initialize with a shift of 3
            lbOutput.Text = _cezar.Encode();
        }

        private void tbInput_KeyUp(object sender, KeyEventArgs e)
        {
            Code();
        }

        private void numericUpDown1_ValueChanged(object sender, EventArgs e)
        {
            Code();
        }
    }

}
