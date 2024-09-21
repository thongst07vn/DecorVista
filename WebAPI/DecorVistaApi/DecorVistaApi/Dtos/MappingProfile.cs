using AutoMapper;
using DecorVistaApi.Models;


namespace DecorVistaApi.Dtos;

public class MappingProfile : Profile
{
    public MappingProfile()
    {
        CreateMap<User, UserDto>().ReverseMap();
        CreateMap<Product, ProductDto>().ReverseMap();
        CreateMap<Designer, DesignerDto>().ReverseMap();
        CreateMap<Cart, CartDto>().ReverseMap();
        CreateMap<CartItem, CartItemDto>().ReverseMap();

    }
}

