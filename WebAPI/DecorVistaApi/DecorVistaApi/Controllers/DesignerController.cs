using DecorVistaApi.Dtos;
using DecorVistaApi.Services;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace DecorVistaApi.Controllers;
[Route("api/designer")]
public class DesignerController : Controller
{
    private DesignerService designerService;
    public DesignerController(DesignerService _designerService)
    {
        designerService = _designerService;
    }
    [Consumes("multipart/form-data")]
    [Produces("application/json")]
    [HttpPost("register")]
    public IActionResult Register(string userinfo)
    {
        var setting = new JsonSerializerSettings();
        setting.Converters.Add(new IsoDateTimeConverter() { DateTimeFormat = "dd/MM/yyyy" });

        var designerDto = JsonConvert.DeserializeObject<DesignerDto>(userinfo);
        designerDto.Password = BCrypt.Net.BCrypt.HashPassword(designerDto.Password);
        try
        {

            return Ok(new
            {
                result = designerService.Register(designerDto)
            });
        }
        catch
        {
            return BadRequest();
        }
    }

    [Produces("application/json")]
    [HttpGet("findall")]
    public IActionResult FindAll()
    {
        try
        {

            return Ok(new
            {
                result = designerService.FindAll()
            });
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
                result = designerService.FindById(id)
            });
        }
        catch
        {
            return BadRequest();
        }
    }

    [Produces("application/json")]
    [HttpGet("findbyemail/{email}")]
    public IActionResult FindByEmail(string email)
    {
        try
        {
            return Ok(new
            {
                result = designerService.FindByEmail(email)
            });
        }
        catch
        {
            return BadRequest();
        }
    }

    [Produces("application/json")]
    [Consumes("application/json")]
    [HttpPost("login")]
    public IActionResult Login([FromBody] DesignerDto designerDto)
    {
        try
        {
            return Ok(new
            {
                result = designerService.Login(designerDto)
            });
        }
        catch
        {
            return BadRequest();
        }
    }

}
