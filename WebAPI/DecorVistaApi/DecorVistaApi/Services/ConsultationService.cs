using DecorVistaApi.Dtos;

namespace DecorVistaApi.Services;

public interface ConsultationService
{
    public bool createConsultation(ConsultationDto consultation);
    public bool editConsultation(ConsultationDto consultationdto);

    public List<ConsultationDto> FindAllconsultatioDSId(int DsId);
}