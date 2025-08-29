namespace CV.API.Domain.Models;

public class Qualification : IEntity
{
    public Qualification(string name, List<string> topics, string grade, DateTime date)
    {
        Name = name;
        Topics = topics;
        Grade = grade;
        Date = date;
    }
    public int Id { get; set; }
    public string Name { get; set; }
    public List<string> Topics { get; set; }
    public string Grade { get; set; }
    public DateTime Date { get; set; }
}
