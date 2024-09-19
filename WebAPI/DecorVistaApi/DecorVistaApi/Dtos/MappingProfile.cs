using AutoMapper;
using DecorVistaApi.Models;


namespace DecorVistaApi.Dtos;

public class MappingProfile : Profile
{
    public MappingProfile()
    {
        CreateMap<User, UserDto>().ReverseMap();

    }
}

