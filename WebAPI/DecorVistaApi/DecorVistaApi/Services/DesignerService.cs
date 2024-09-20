using DecorVistaApi.Dtos;

namespace DecorVistaApi.Services;

public interface DesignerService
{
    public bool Register(DesignerDto designerdto);
    public List<DesignerDto> FindAll();
    public DesignerDto FindById(int id);
    public DesignerDto FindByEmail(string email);
    public bool Login(DesignerDto designerdto);

}