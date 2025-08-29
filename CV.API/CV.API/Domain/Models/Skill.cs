using System.ComponentModel.DataAnnotations;

namespace CV.API.Domain.Models;

public class Skill : IEntity
{
    public Skill(string name, int rating)
    {
        Name = name;
        Rating = rating;
    }
    public int Id { get; set; }
    public string Name { get; set; }
    [Range(0, 3, ErrorMessage = "Rating must be within 0 and 3")]
    public int Rating { get; set; }
}