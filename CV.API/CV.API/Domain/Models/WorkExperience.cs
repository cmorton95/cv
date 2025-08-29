namespace CV.API.Domain.Models;
public class WorkExperience : IEntity
{
    public WorkExperience(string name, DateTime startDate, DateTime endDate, string type, string description)
    {
        Name = name;
        StartDate = startDate;
        EndDate = endDate;
        Type = type;
        Description = description;
    }
    public int Id { get; set; }
    public string Name { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
    public string Type { get; set; }
    public string Description { get; set; }
}