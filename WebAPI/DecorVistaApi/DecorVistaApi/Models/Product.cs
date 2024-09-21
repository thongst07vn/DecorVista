using System;
using System.Collections.Generic;

namespace DecorVistaApi.Models;

public partial class Product
{
    public int Id { get; set; }

    public string? Name { get; set; }

    public string? Brand { get; set; }

    public string? Description { get; set; }

    public string? Image { get; set; }

    public double? Price { get; set; }

    public string? Color { get; set; }

    public int? CategoryId { get; set; }

    public virtual ICollection<CartItem> CartItems { get; set; } = new List<CartItem>();

    public virtual Category? Category { get; set; }

    public virtual ICollection<OrderItem> OrderItems { get; set; } = new List<OrderItem>();
}
