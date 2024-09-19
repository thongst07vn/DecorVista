﻿namespace DecorVistaApi.Dtos;

public class UserDto
{
    public int Id { get; set; }

    public string? Avatar { get; set; }

    public string Username { get; set; }

    public string Email { get; set; }

    public string? Password { get; set; }

    public int? Role { get; set; }

    public string? Contactnumber { get; set; }
}
