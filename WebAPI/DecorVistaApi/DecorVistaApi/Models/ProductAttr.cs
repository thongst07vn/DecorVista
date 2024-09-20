using System;
using System.Collections.Generic;

namespace DecorVistaApi.Models;

public partial class ProductAttr
{
    public int Id { get; set; }

    public int? ProductId { get; set; }

    public string? Name { get; set; }

    public virtual Product? Product { get; set; }
}
