using CV.API.Domain;
using CV.API.Domain.Models;
using Microsoft.AspNetCore.Mvc;

namespace CV.API.Endpoints;

public class EndpointMapper<TEntity> where TEntity : class, IEntity
{
    private string _route;
    private Func<UnitOfWork, Repository<TEntity>> _repo;
    public EndpointMapper(string route, Func<UnitOfWork, Repository<TEntity>> repo)
    {
        _route = route;
        _repo = repo;
    }

    public void Map(IEndpointRouteBuilder app)
    {
        app.MapGet(_route, async ([FromQuery]int page = 0, [FromQuery]int pageSize = 0) => await Get(page, pageSize));
        app.MapGet(_route + "/{id}", async (int id) => await Get(id));
        app.MapPost(_route, async ([FromBody] IEnumerable<TEntity> entity) => await Post(entity));
        app.MapPut(_route, async (TEntity entity) => await Put(entity));
        app.MapDelete(_route, async (int id) => await Delete(id));
    }

    private async Task<IResult> Get(int page, int pageSize)
    {
        using var uow = new UnitOfWork();

        var entities = await _repo(uow).Get(page, pageSize);

        return Results.Ok(entities);
    }

    private async Task<IResult> Get(int id)
    {
        using var uow = new UnitOfWork();

        var entity = await _repo(uow).GetByID(id);
        if (entity == null)
        {
            return Results.NotFound();
        }

        return Results.Ok(entity);
    }

    private async Task<IResult> Post(IEnumerable<TEntity> entities)
    {
        using var uow = new UnitOfWork();

        var repo = _repo(uow);
        foreach (var entity in entities)
        {
            repo.Add(entity);
        }
            
        await uow.Save();

        return Results.Ok();
    }

    private async Task<IResult> Put(TEntity entity)
    {
        using var uow = new UnitOfWork();

        _repo(uow).Update(entity);
        await uow.Save();

        return Results.Ok();
    }

    private async Task<IResult> Delete(int id)
    {
        using var uow = new UnitOfWork();

        await _repo(uow).Delete(id);
        await uow.Save();

        return Results.Ok();
    }
}

public static class EndpointMapperExtensions
{
    public static IEndpointRouteBuilder MapEndpoints(this IEndpointRouteBuilder builder)
    {
        var skillMapper = new EndpointMapper<Skill>("skill", (uow) => uow.SkillRepository);
        var hobbyMapper = new EndpointMapper<Hobby>("hobby", (uow) => uow.HobbyRepository);
        var wexMapper = new EndpointMapper<WorkExperience>("work", (uow) => uow.WorkExperienceRepository);
        var qualMapper = new EndpointMapper<Qualification>("qual", (uow) => uow.QualificationsRepository);

        skillMapper.Map(builder);
        hobbyMapper.Map(builder);
        wexMapper.Map(builder);
        qualMapper.Map(builder);

        return builder;
    }
}
