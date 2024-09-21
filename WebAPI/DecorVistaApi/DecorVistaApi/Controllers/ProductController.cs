using DecorVistaApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace DecorVistaApi.Controllers;
[Route("api/product")]
public class ProductController : Controller
{
    private ProductsService productService;
    public ProductController(ProductsService _productService)
    {
        productService = _productService;
    }
    [Produces("application/json")]
    [HttpGet("findall")]
    public IActionResult FindAll()
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
    [Produces("application/json")]
    [HttpGet("findbyid/{id}")]
    public IActionResult FindById(int id)
    {
        try
        {

            return Ok(new
            {
                result = productService.FindById(id)
            });
        }
        catch
        {
            return BadRequest();
        }
    }
}
