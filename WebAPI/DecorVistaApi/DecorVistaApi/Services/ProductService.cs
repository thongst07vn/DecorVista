using DecorVistaApi.Dtos;

namespace DecorVistaApi.Services;

public interface ProductService
{
    public List<ProductDto> FindAll();
}
