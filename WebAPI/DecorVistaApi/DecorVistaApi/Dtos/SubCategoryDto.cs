namespace DecorVistaApi.Dtos;

public class SubCategoryDto
{
    public int Id { get; set; }

    public int? ParentId { get; set; }

    public string? Name { get; set; }

    public string? Description { get; set; }
}
