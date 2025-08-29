namespace CV.API.Domain.Models;

public class Hobby : IEntity
{
    public Hobby(string name, string image, string description)
    {
        Name = name;
        Image = image;
        Description = description;
    }
    public int Id { get; set; }
    public string Name { get; set; }
    public string Image { get; set; }
    public string Description { get; set; }
}
