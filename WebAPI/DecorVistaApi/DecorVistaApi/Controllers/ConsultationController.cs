using DecorVistaApi.Dtos;
using DecorVistaApi.Services;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace DecorVistaApi.Controllers;
[Route("api/consultation")]

public class ConsultationController : Controller
{
    private ConsultationService consultationService;
    public ConsultationController(ConsultationService _consultationService)
    {
        consultationService = _consultationService;
    }
    [Produces("application/json")]
    [HttpGet("findallconsultatio/{DsId}")]
    public IActionResult FindAll(int DsId)
    {
        try
        {

            return Ok(new
            {
                result = consultationService.FindAllconsultatioDSId(DsId)
            });
        }
        catch
        {
            return BadRequest();
        }
    }
    [Consumes("multipart/form-data")]
    [Produces("application/json")]
    [HttpPost("create")]
    public IActionResult CreateConsultation(string desingerConsultation)
    {
        try
        {
            var setting = new JsonSerializerSettings();
            setting.Converters.Add(new IsoDateTimeConverter()
            {
                DateTimeFormat = "yyyy-MM-dd"
            });
            var desingerConsultationDTO = JsonConvert.DeserializeObject<ConsultationDto>(desingerConsultation);

            return Ok(new
            {
                Result = consultationService.createConsultation(desingerConsultationDTO)
            });
        }
        catch
        {
            return BadRequest();
        }
    }
}
