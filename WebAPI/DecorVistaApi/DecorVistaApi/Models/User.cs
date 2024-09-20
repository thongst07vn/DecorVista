using System;
using System.Collections.Generic;

namespace DecorVistaApi.Models;

public partial class User
{
    public int Id { get; set; }

    public string? Avatar { get; set; }

    public string Username { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string? Password { get; set; }

    public int? Role { get; set; }

    public string? Contactnumber { get; set; }

    public virtual ICollection<Address> Addresses { get; set; } = new List<Address>();

    public virtual ICollection<Cart> Carts { get; set; } = new List<Cart>();

    public virtual ICollection<Consultation> Consultations { get; set; } = new List<Consultation>();

    public virtual ICollection<Follow> FollowDesigners { get; set; } = new List<Follow>();

    public virtual ICollection<Follow> FollowUsers { get; set; } = new List<Follow>();

    public virtual ICollection<OrderDetail> OrderDetails { get; set; } = new List<OrderDetail>();
}
