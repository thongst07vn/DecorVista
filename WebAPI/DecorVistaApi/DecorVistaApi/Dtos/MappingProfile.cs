using AutoMapper;
using DecorVistaApi.Models;
using System.Globalization;


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
        CreateMap<Consultation, ConsultationDto>()
            .ForMember(
                des => des.ScheduledTime,
                src => src.MapFrom(src => src.ScheduledTime.ToString("yyyy-MM-dd"))
            );
        CreateMap<ConsultationDto, Consultation>()
            .ForMember(
                des => des.ScheduledTime,
                src => src.MapFrom(src => DateTime.ParseExact(src.ScheduledTime, "yyyy-MM-dd", CultureInfo.InvariantCulture))
            );
        CreateMap<Address, AddressDto>().ReverseMap();

        CreateMap<OrderItem, OrderItemDto>().ReverseMap();
        CreateMap<OrderDetail, OrderDetailDto>()
            .ForMember(
                des => des.CreatedAt,
                src => src.MapFrom(src => src.CreatedAt.ToString("dd/MM/yyyy")))
                .ForMember(
                des => des.UpdatedAt,
                src => src.MapFrom(src => src.UpdatedAt.ToString("dd/MM/yyyy")));

        CreateMap<OrderDetailDto, OrderDetail>()
            .ForMember(
                des => des.CreatedAt,
                src => src.MapFrom(src => DateTime.ParseExact(src.CreatedAt, "dd/MM/yyyy", CultureInfo.InvariantCulture)))
            .ForMember(
                des => des.UpdatedAt,
                src => src.MapFrom(src => DateTime.ParseExact(src.UpdatedAt, "dd/MM/yyyy", CultureInfo.InvariantCulture)));
    }
}

