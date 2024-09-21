using DecorVistaApi.Dtos;

namespace DecorVistaApi.Services;

public interface CartService
{
    public CartDto FindById(int id);
    public bool AddProductToCart(CartItemDto cartItemDto);

    public List<CartItemDto> FindAllCartItem(int id);
}