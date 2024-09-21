namespace DecorVistaApi.Models;

public partial class OrderDetail
{
    public int Id { get; set; }

    public int? UserId { get; set; }

    public int? PaymentType { get; set; }

    public int? Total { get; set; }

    public DateTime CreatedAt { get; set; }

    public DateTime UpdatedAt { get; set; }

    public virtual ICollection<OrderItem> OrderItems { get; set; } = new List<OrderItem>();

    public virtual User? User { get; set; }
}
