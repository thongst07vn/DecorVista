using System;
using System.Collections.Generic;

namespace DecorVistaApi.Models;

public partial class Designer
{
    public int DesignerId { get; set; }

    public string? Avatar { get; set; }

    public string Username { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string? Password { get; set; }

    public int? Role { get; set; }

    public string? Contactnumber { get; set; }

    public int? Yearofexp { get; set; }

    public string? Specialization { get; set; }

    public virtual ICollection<Consultation> Consultations { get; set; } = new List<Consultation>();
}
