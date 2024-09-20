using AutoMapper;
using DecorVistaApi.Dtos;
using DecorVistaApi.Models;

namespace DecorVistaApi.Services;

public class UserServiceImpl : UserService
{
    private DatabaseContext db;
    private IMapper mapper;
    public UserServiceImpl(DatabaseContext _db, IMapper _mapper)
    {
        db = _db;
        mapper = _mapper;
    }

    public List<UserDto> FindAll()
    {
        return mapper.Map<List<UserDto>>(db.Users).ToList();
    }

    public UserDto FindByEmail(string email)
    {
        return mapper.Map<UserDto>(db.Users.SingleOrDefault(u => u.Email == email));
    }

    public UserDto FindById(int id)
    {
        return mapper.Map<UserDto>(db.Users.Find(id));
    }

    public bool Login(UserDto userdto)
    {
        var account = mapper.Map<UserDto>(db.Users.SingleOrDefault(u => u.Email == userdto.Email));
        if (account != null)
        {
            return BCrypt.Net.BCrypt.Verify(userdto.Password, account.Password);
        }
        return false;
    }

    public bool Register(UserDto userdto)
    {
        try
        {
            var user = mapper.Map<User>(userdto);
            db.Users.Add(user);
            return db.SaveChanges() > 0;
        }
        catch
        {
            return false;
        }
    }


}
