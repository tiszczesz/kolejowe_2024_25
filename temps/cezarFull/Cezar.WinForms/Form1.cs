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
            try
            {
                string inputText = tbInput.Text; // Get input from textBox1
                int key = (int)numericUpDown1.Value; // Get key from numericUpDown1
                _cezar = new CezarCipher(inputText, key); // Initialize with a shift of 3
                lbOutput.Text = _cezar.Encode();
            }
            catch (Exception ex)
            {
                MessageBox.Show($"B³¹d: {ex.Message}");
            }

        }

        private void tbInput_KeyUp(object sender, KeyEventArgs e)
        {
            Code();
        }

        private void numericUpDown1_ValueChanged(object sender, EventArgs e)
        {
            Code();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            if (saveFileDialog1.ShowDialog() == DialogResult.OK)
            {
                File.WriteAllText(saveFileDialog1.FileName, lbOutput.Text);
            }
        }
    }

}
