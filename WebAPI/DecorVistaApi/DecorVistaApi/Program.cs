//using DecorVistaApi.Models;
using DecorVistaApi.Dtos;
using DecorVistaApi.Models;
using DecorVistaApi.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors();

//cau hinh auto mapper
builder.Services.AddAutoMapper(typeof(MappingProfile));

builder.Services.AddControllers();

string connectionString = builder.Configuration["ConnectionStrings:DefaultConnection"].ToString();
builder.Services.AddDbContext<DatabaseContext>(option => option.UseLazyLoadingProxies().UseSqlServer(connectionString));
builder.Services.AddScoped<UserService, UserServiceImpl>();
builder.Services.AddScoped<ProductsService, ProductsServiceImpl>();



var app = builder.Build();
app.UseCors(builder => builder
                .AllowAnyHeader()
                .AllowAnyMethod()
                .SetIsOriginAllowed((host) => true)
                .AllowCredentials()
            );

app.UseStaticFiles();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action}");

app.Run();
