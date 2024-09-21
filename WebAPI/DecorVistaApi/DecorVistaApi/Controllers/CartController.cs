using DecorVistaApi.Dtos;
using DecorVistaApi.Services;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace DecorVistaApi.Controllers;
[Route("api/cart")]
public class CartController : Controller
{
    private CartService cartService;
    private UserService userService;
    public CartController(CartService _cartService, UserService _userService)
    {
        cartService = _cartService;
        userService = _userService;
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

    [Produces("application/json")]
    [Consumes("application/json")]

    [HttpDelete("deleteitem/{id}")]
    public IActionResult DeleteItem(int id)
    {
        try
        {
            return Ok(new
            {
                result = cartService.DeleteItem(id)
            });

        }
        catch
        {
            return BadRequest();
        }
    }

    [Produces("application/json")]
    [Consumes("multipart/form-data")]

    [HttpPost("createorder")]
    public IActionResult CreateOrder(string address, string invoicelist, string order)
    {
        var setting = new JsonSerializerSettings();
        setting.Converters.Add(new IsoDateTimeConverter()
        {
            DateTimeFormat = "dd/MM/yyyy"
        });

        try
        {
            var addressDto = JsonConvert.DeserializeObject<AddressDto>(address);
            var invoicelistDto = JsonConvert.DeserializeObject<List<OrderItemDto>>(invoicelist);
            var orderDto = JsonConvert.DeserializeObject<OrderDetailDto>(order);
            if (userService.AddAddress(addressDto))
            {
                try
                {
                    return Ok(new
                    {
                        result = cartService.CreateOrder(orderDto, invoicelistDto)
                    });

                }
                catch
                {
                    return BadRequest();

                }
            }
            else
            {
                return BadRequest();
            }
        }
        catch
        {
            return BadRequest();
        }
    }
}
