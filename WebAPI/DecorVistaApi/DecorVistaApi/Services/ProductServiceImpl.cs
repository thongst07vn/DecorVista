using AutoMapper;
using DecorVistaApi.Dtos;
using DecorVistaApi.Models;

namespace DecorVistaApi.Services;

public class ProductServiceImpl : ProductService
{
    private DatabaseContext db;
    private IMapper mapper;
    public ProductServiceImpl(DatabaseContext _db, IMapper _mapper)
    {
        db = _db;
        mapper = _mapper;
    }
    public List<ProductDto> FindAll()
    {
        return mapper.Map<List<ProductDto>>(db.Products);
    }
}
