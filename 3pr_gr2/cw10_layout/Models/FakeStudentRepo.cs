using System;
using cw10_layout.Models.Abstractions;

namespace cw10_layout.Models;

public class FakeStudentRepo : IStudentRepo
{
    private List<MyStudent> _students = new List<MyStudent>
    {
        new MyStudent { Id = 1, FirstName = "Jan", 
        LastName = "Kowalski", Age = 20 },
        new MyStudent { Id = 2, FirstName = "Anna", 
        LastName = "Nowak", Age = 22 },
        new MyStudent { Id = 3, FirstName = "Piotr", 
        LastName = "Kowalczyk", Age = 21 }
    };
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
        return _students;
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
