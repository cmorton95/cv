using CV.API.Domain.Models;

namespace CV.API.Domain;

public class UnitOfWork : IDisposable
{
    private CvDbContext _context = new CvDbContext();
    private Repository<Hobby>? _hobbyRepo;
    private Repository<WorkExperience>? _wexRepo;
    private Repository<Skill>? _skillRepo;
    private Repository<Qualification>? _qualiRepo;
    private bool _disposed = false;

    public Repository<Hobby> HobbyRepository
    {
        get
        {
            _hobbyRepo ??= new Repository<Hobby>(_context);
            return _hobbyRepo;
        }
    }

    public Repository<WorkExperience> WorkExperienceRepository
    {
        get
        {
            _wexRepo ??= new Repository<WorkExperience>(_context);
            return _wexRepo;
        }
    }

    public Repository<Skill> SkillRepository
    {
        get
        {
            _skillRepo ??= new Repository<Skill>(_context);
            return _skillRepo;
        }
    }

    public Repository<Qualification> QualificationsRepository
    {
        get
        {
            _qualiRepo ??= new Repository<Qualification>(_context);
            return _qualiRepo;
        }
    }

    public async Task Save()
    {
        await _context.SaveChangesAsync();
    }

    protected virtual void Dispose(bool disposing)
    {
        if (!_disposed)
        {
            if (disposing)
            {
                _context.Dispose();
            }
        }
        _disposed = true;
    }

    public void Dispose()
    {
        Dispose(true);
        GC.SuppressFinalize(this);
    }
}
