﻿namespace DecorVistaApi.Dtos;

public class ProductDto
{
    public int Id { get; set; }

    public string? Name { get; set; }

    public string? Brand { get; set; }

    public string? Description { get; set; }

    public int? CategoryId { get; set; }

    public string? Image { get; set; }

    public double? Price { get; set; }
}
