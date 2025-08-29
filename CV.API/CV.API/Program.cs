using CV.API.Endpoints;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.UseCors(c => c.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());

app.MapEndpoints();
app.MapGet("intro", () => Results.Ok("Hi, I'm Connor. I just joined the 30's club and have been a technology " +
    "enthusiast and software developer for most of those years. I began hobbyist software development as " +
    "a teenager, with roots in Java, SQL and C(++). Since then, I've graduated university with a 2-1 " +
    "and moved on to gain 10 years of professional software development experience, primarily in the " +
    ".NET stack and cloud technologies. I perform best as a core member of a team, and love to help " +
    "and mentor others whilst also learning alongside them. "));

app.UseSwagger();
app.UseSwaggerUI();

app.Run();
