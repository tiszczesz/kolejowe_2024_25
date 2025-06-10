using System;
using System.Text.Json;
namespace mywebApp.Models;

public class PersonRepo
{
    private List<Person> _people;
    public PersonRepo(string filePath) {
        string json = File.ReadAllText(filePath);
        _people = JsonSerializer.Deserialize<List<Person>>(json)
            ?? new List<Person>();
    }
    public List<Person> GetAll()
    {
        return _people;
    }
}
