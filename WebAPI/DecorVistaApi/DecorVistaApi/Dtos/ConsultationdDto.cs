namespace DecorVistaApi.Dtos;

public class ConsultationDto
{
    public int Id { get; set; }

    public string ScheduledTime { get; set; }

    public int? Status { get; set; }

    public string? Notes { get; set; }

    public int? UserId { get; set; }

    public int? DesignerId { get; set; }
}