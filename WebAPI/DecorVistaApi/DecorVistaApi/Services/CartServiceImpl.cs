using AutoMapper;
using DecorVistaApi.Dtos;
using DecorVistaApi.Models;

namespace DecorVistaApi.Services;

public class CartServiceImpl : CartService
{
    private DatabaseContext db;
    private IMapper mapper;
    public CartServiceImpl(DatabaseContext _db, IMapper _mapper)
    {
        db = _db;
        mapper = _mapper;
    }

    public bool AddProductToCart(CartItemDto cartItemDto)
    {
        var cartItem = mapper.Map<CartItem>(cartItemDto);
        db.CartItems.Add(cartItem);
        return db.SaveChanges() > 0;
    }

    public List<CartItemDto> FindAllCartItem(int id)
    {
        return mapper.Map<List<CartItemDto>>(db.CartItems.Where(c => c.CartId == id)).ToList();
    }

    public CartDto FindById(int id)
    {
        return mapper.Map<CartDto>(db.Carts.Find(id));
    }
}