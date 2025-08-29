using CV.API.Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace CV.API.Domain;

public class CvDbContext : DbContext
{
    public DbSet<WorkExperience> WorkExperience { get; set; }
    public DbSet<Qualification> Qualifications { get; set; }
    public DbSet<Skill> Skills { get; set; }
    public DbSet<Hobby> Hobbies { get; set; }

    public string DbPath { get; }

    public CvDbContext()
    {
        var folder = Environment.SpecialFolder.LocalApplicationData;
        var path = Environment.GetFolderPath(folder);
        DbPath = Path.Join(path, "blogging.db");
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) 
        => optionsBuilder.UseSqlite($"Data Source={DbPath}");
}
