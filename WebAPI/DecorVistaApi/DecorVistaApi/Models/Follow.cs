using System;
using System.Collections.Generic;

namespace DecorVistaApi.Models;

public partial class Follow
{
    public int Id { get; set; }

    public int? UserId { get; set; }

    public int? DesignerId { get; set; }

    public virtual User? Designer { get; set; }

    public virtual User? User { get; set; }
}
