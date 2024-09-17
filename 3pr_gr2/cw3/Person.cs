public class Person
{
    private string firstname;
    private string lastname;
    private int age;

    public Person(string firstname, string lastname, int age = 18) //konstruktor
    {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    public Person()
    {
        firstname = "";
        lastname = "";
        age = 18;
    }
    public override string ToString()
    {
        return Firstname + " " + Lastname + " wiek: " + Age;
    }
    //property dla pola age
    public int Age
    {
        get { return age; }
        set { age = value < 0 ? -value : value; }
    }
    public string Firstname
    {
        get { return firstname.ToUpper(); }
        set { firstname = value; }
    }
    public string Lastname
    {
        get { return lastname; }
        set { lastname = value; }
    }
}