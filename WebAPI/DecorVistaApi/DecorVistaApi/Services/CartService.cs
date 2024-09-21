﻿using DecorVistaApi.Dtos;

namespace DecorVistaApi.Services;

public interface CartService
{
    public CartDto FindById(int id);
    public bool AddProductToCart(CartItemDto cartItemDto);

    public List<CartItemDto> FindAllCartItem(int id);
    public bool DeleteItem(int id);

    public bool CreateOrder(OrderDetailDto orderDetailDto, List<OrderItemDto> orderItems);
}
