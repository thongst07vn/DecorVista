using AutoMapper;
using DecorVistaApi.Dtos;
using DecorVistaApi.Models;

namespace DecorVistaApi.Services;

public class DesignerServiceImpl : DesignerService
{
    private DatabaseContext db;
    private IMapper mapper;
    public DesignerServiceImpl(DatabaseContext _db, IMapper _mapper)
    {
        db = _db;
        mapper = _mapper;
    }
    public List<DesignerDto> FindAll()
    {
        return mapper.Map<List<DesignerDto>>(db.Designers).ToList();
    }

    public DesignerDto FindByEmail(string email)
    {
        return mapper.Map<DesignerDto>(db.Designers.SingleOrDefault(x => x.Email == email));
    }

    public DesignerDto FindById(int id)
    {
        return mapper.Map<DesignerDto>(db.Designers.Find(id));
    }

    public bool Login(DesignerDto designerdto)
    {
        var account = mapper.Map<DesignerDto>(db.Designers.SingleOrDefault(u => u.Email == designerdto.Email));
        if (account != null)
        {
            return BCrypt.Net.BCrypt.Verify(designerdto.Password, account.Password);
        }
        return false;
    }

    public bool Register(DesignerDto designerdto)
    {
        try
        {
            var d = mapper.Map<Designer>(designerdto);
            db.Designers.Add(d);
            return db.SaveChanges() > 0;
        }
        catch
        {
            return false;
        }
    }
}