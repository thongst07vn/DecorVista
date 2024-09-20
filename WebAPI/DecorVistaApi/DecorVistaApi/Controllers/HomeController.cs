using DecorVistaApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace DecorVistaApi.Controllers;
[Route("api/home")]
public class HomeController : Controller
{
    private ProductsService productService;
    HomeController(ProductsService _productService)
    {
        productService = _productService;
    }
    [Produces("application/json")]
    [HttpGet("findall")]
    public IActionResult FindAll()
    {
        try
        {

            return Ok(new
            {
                result = productService.FindAll()
            });
        }
        catch
        {
            return BadRequest();
        }
    }
}
