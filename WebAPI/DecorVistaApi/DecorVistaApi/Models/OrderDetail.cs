using System;
using System.Collections.Generic;

namespace DecorVistaApi.Models;

public partial class OrderDetail
{
    public int Id { get; set; }

    public int? UserId { get; set; }

    public int? PaymentId { get; set; }

    public int? Total { get; set; }

    public DateOnly? CreatedAt { get; set; }

    public DateOnly? UpdatedAt { get; set; }

    public virtual ICollection<OrderItem> OrderItems { get; set; } = new List<OrderItem>();

    public virtual User? User { get; set; }
}
