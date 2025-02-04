using System;
using cw10_layout.Models.Abstractions;
using MySql.Data.MySqlClient;

namespace cw10_layout.Models;

public class MySqlStudentRepo : IStudentRepo
{
    private readonly string? _connectionString;
    public MySqlStudentRepo(string? connectionString)
    {
        _connectionString = connectionString;
    }

    public void AddStudent(MyStudent student)
    {
        throw new NotImplementedException();
    }

    public void DeleteStudent(int id)
    {
        throw new NotImplementedException();
    }

    public List<MyStudent> GetAllStudents()
    {
        using var connection = new MySqlConnection(_connectionString);
        MySqlCommand command = connection.CreateCommand();
        command.CommandText = "SELECT * FROM students";
        connection.Open();
        List<MyStudent> students = new List<MyStudent>();
        var reader = command.ExecuteReader();
        while(reader.Read()){
            students.Add(
                new MyStudent{
                    Id = reader.GetInt32(0),
                    FirstName = reader.GetString(1),
                    LastName = reader.GetString(2),
                    Age = reader.GetInt32(3)                    
                }
            );
        }
        connection.Close();
        return students;
    }

    public MyStudent? GetStudentById(int id)
    {
        throw new NotImplementedException();
    }

    public void UpdateStudent(MyStudent student)
    {
        throw new NotImplementedException();
    }
}
