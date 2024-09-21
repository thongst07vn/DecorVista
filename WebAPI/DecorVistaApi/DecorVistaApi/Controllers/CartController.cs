using DecorVistaApi.Dtos;
using DecorVistaApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace DecorVistaApi.Controllers;
[Route("api/cart")]
public class CartController : Controller
{
    private CartService cartService;
    public CartController(CartService _cartService)
    {
        cartService = _cartService;
    }

    [Consumes("application/json")]
    [Produces("application/json")]
    [HttpPost("addtocart")]
    public IActionResult AddToCart([FromBody] CartItemDto cartItemDto)
    {
        try
        {
            return Ok(new
            {
                result = cartService.AddProductToCart(cartItemDto)
            });

        }
        catch
        {
            return BadRequest();
        }
    }

    [Produces("application/json")]
    [HttpGet("innercart/{id}")]
    public IActionResult UserCart(int id)
    {
        try
        {
            return Ok(new
            {
                result = cartService.FindAllCartItem(id)
            });

        }
        catch
        {
            return BadRequest();
        }
    }
}