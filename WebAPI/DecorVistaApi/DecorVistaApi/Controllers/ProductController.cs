using DecorVistaApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace DecorVistaApi.Controllers;
[Route("api/product")]
public class ProductController : Controller
{
    private ProductService productService;
    public ProductController(ProductService _productService)
    {
        productService = _productService;
    }
    [Produces("application/json")]
    [HttpGet("findall")]
    public IActionResult Findall()
    {
        try
        {

            return Ok(productService.FindAll());
        }
        catch
        {
            return BadRequest();
        }
    }
}
