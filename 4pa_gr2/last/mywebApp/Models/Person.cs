using System;

namespace mywebApp.Models;

public class Person
{
    [System.Text.Json.Serialization.JsonPropertyName("Id")]
    public int Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public DateTime DateOfBirth { get; set; }
}
