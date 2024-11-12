using System;

namespace cw5_ef.Models;

public class WorkPlace
{
    public int Id { get; set; }
    public string? Address { get; set; }
    public string? Description { get; set; }

    public ICollection<MyPerson>? Workers { get; set; }

}
