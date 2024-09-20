using AutoMapper;
using DecorVistaApi.Dtos;
using DecorVistaApi.Models;

namespace DecorVistaApi.Services;

public class ProductsServiceImpl : ProductsService
{
    private DatabaseContext db;
    private IMapper mapper;
    public ProductsServiceImpl(DatabaseContext _db, IMapper _mapper)
    {
        db = _db;
        mapper = _mapper;
    }

    public List<ProductDto> FindAll()
    {
        return mapper.Map<List<ProductDto>>(db.Products).ToList();
    }

    public ProductDto FindById(int id)
    {
        return mapper.Map<ProductDto>(db.Products.Find(id));

    }
}
