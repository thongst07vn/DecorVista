using AutoMapper;
using DecorVistaApi.Dtos;
using DecorVistaApi.Models;

namespace DecorVistaApi.Services;

public class ConsultationServiceImpl : ConsultationService
{
    private DatabaseContext db;
    private IMapper mapper;
    public ConsultationServiceImpl(DatabaseContext _db, IMapper _mapper)
    {
        db = _db;
        mapper = _mapper;
    }
    public bool createConsultation(ConsultationDto consultationDto)
    {
        try
        {
            var consultation = mapper.Map<Consultation>(consultationDto);
            db.Consultations.Add(consultation);
            return db.SaveChanges() > 0;
        }
        catch
        {
            return false;
        }
    }

    public bool editConsultation(ConsultationDto consultationdto)
    {
        try
        {
            var consultation = mapper.Map<Consultation>(consultationdto);
            db.Entry(consultation).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            return db.SaveChanges() > 0;
        }
        catch
        {
            return false;
        }
    }

    public List<ConsultationDto> FindAllconsultatioDSId(int DsId)
    {
        return mapper.Map<List<ConsultationDto>>(db.Consultations.Where(c => c.DesignerId == DsId)).ToList();
    }
}
