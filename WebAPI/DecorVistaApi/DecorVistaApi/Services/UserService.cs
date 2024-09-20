using DecorVistaApi.Dtos;

namespace DecorVistaApi.Services;

public interface UserService
{
    public bool Register(UserDto userdto);
    public bool SiginGG(UserDto userdto);
    public UserDto FindByEmail(string email);
    public bool Login(UserDto userdto);
    public List<UserDto> FindAll();
    public UserDto FindById(int id);

}
