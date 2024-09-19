using DecorVistaApi.Dtos;
using DecorVistaApi.Services;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace DecorVistaApi.Controllers;
[Route("api/user")]
public class UserController : Controller
{
    private UserService userService;
    public UserController(UserService _userService)
    {
        userService = _userService;
    }

    [Consumes("multipart/form-data")]
    [Produces("application/json")]
    [HttpPost("register")]
    public IActionResult Register(string userinfo)
    {
        var setting = new JsonSerializerSettings();
        setting.Converters.Add(new IsoDateTimeConverter() { DateTimeFormat = "dd/MM/yyyy" });

        var userDto = JsonConvert.DeserializeObject<UserDto>(userinfo);
        userDto.Password = BCrypt.Net.BCrypt.HashPassword(userDto.Password);
        try
        {

            return Ok(new
            {
                result = userService.Register(userDto)
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
                result = userService.FindAll()
            });
        }
        catch
        {
            return BadRequest();
        }
    }
}
