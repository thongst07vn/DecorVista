using DecorVistaApi.Dtos;

namespace DecorVistaApi.Services;

public interface UserService
{
    public bool Register(UserDto userdto);
    public List<UserDto> FindAll();
    public UserDto FindById(int id);
    public UserDto FindByEmail(string email);

}
