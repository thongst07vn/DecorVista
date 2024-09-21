﻿namespace DecorVistaApi.Dtos;

public class OrderDetailDto
{
    public int Id { get; set; }

    public int? UserId { get; set; }

    public int? PaymentType { get; set; }

    public int? Total { get; set; }

    public string CreatedAt { get; set; }

    public string UpdatedAt { get; set; }
}
