using System;

namespace cw10_layout.Models.Abstractions;

public interface IStudentRepo
{
    List<MyStudent> GetAllStudents();
    MyStudent? GetStudentById(int id);
    void AddStudent(MyStudent student);
    void UpdateStudent(MyStudent student);
    void DeleteStudent(int? id);
}
