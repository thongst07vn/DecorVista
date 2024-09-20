using System;
using System.Collections.Generic;

namespace DecorVistaApi.Models;

public partial class Address
{
    public int Id { get; set; }

    public int? UserId { get; set; }

    public string? Title { get; set; }

    public string? AddressLine1 { get; set; }

    public string? AddressLine2 { get; set; }

    public string? Country { get; set; }

    public string? City { get; set; }

    public string? PostalCode { get; set; }

    public string? Landmark { get; set; }

    public string? PhoneNumber { get; set; }

    public virtual User? User { get; set; }
}
