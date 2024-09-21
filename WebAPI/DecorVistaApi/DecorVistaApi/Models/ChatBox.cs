using System;
using System.Collections.Generic;

namespace DecorVistaApi.Models;

public partial class ChatBox
{
    public int? UserId { get; set; }

    public int? DesignerId { get; set; }

    public DateTime? ChatDay { get; set; }

    public bool? ChatType { get; set; }

    public string? Message { get; set; }

    public virtual Designer? Designer { get; set; }

    public virtual User? User { get; set; }
}
