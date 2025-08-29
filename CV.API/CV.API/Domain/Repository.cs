namespace CV.API.Domain;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Data;
using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;

public class Repository<TEntity> where TEntity : class, IEntity
{
    internal CvDbContext context;
    internal DbSet<TEntity> dbSet;

    public Repository(CvDbContext context)
    {
        this.context = context;
        dbSet = context.Set<TEntity>();
    }

    public virtual async Task<IEnumerable<TEntity>> Get()
    {
        return await dbSet.ToListAsync();
    }

    public virtual async Task<IEnumerable<TEntity>> Get(int page = 0, int pageSize = 0)
    {
        var start = page * pageSize;

        var query = dbSet.Skip(start);
        if (pageSize > 0) 
        {
            query = query.Take(pageSize);
        }

        return await query.ToListAsync();
    }

    public virtual async Task<TEntity?> GetByID(int id)
    {
        return await dbSet.FirstOrDefaultAsync(x => x.Id == id);
    }

    public virtual void Add(TEntity entity)
    {
        dbSet.Add(entity);
    }

    public virtual async Task Delete(int id)
    {
        var entityToDelete = await GetByID(id);
        if (entityToDelete != null)
        {
            Delete(entityToDelete);
        }
    }

    public virtual void Delete(TEntity entityToDelete)
    {
        if (context.Entry(entityToDelete).State == EntityState.Detached)
        {
            dbSet.Attach(entityToDelete);
        }
        dbSet.Remove(entityToDelete);
    }

    public virtual void Update(TEntity entityToUpdate)
    {
        dbSet.Attach(entityToUpdate);
        context.Entry(entityToUpdate).State = EntityState.Modified;
    }
}
