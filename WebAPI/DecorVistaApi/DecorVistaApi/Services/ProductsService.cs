using DecorVistaApi.Dtos;

namespace DecorVistaApi.Services;

public interface ProductsService
{

    public List<ProductDto> FindAll();
    public ProductDto FindById(int id);

}
