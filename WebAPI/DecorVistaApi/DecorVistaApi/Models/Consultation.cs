using System;
using System.Collections.Generic;

namespace DecorVistaApi.Models;

public partial class Consultation
{
    public int Id { get; set; }

    public DateTime? ScheduledTime { get; set; }

    public string? Status { get; set; }

    public string? Notes { get; set; }

    public int? UserId { get; set; }

    public int? DesignerId { get; set; }

    public virtual Designer? Designer { get; set; }

    public virtual User? User { get; set; }
}
