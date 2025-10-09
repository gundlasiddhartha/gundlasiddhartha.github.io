namespace Portfolio.Api.Models;

public record PortfolioResponse
{
    public required Profile Profile { get; init; }
    public required Introduction Introduction { get; init; }
    public required IReadOnlyCollection<Skill> Skills { get; init; }
    public required Summary Summary { get; init; }
    public required IReadOnlyCollection<TimelineItem> Timeline { get; init; }
}

public record Profile(string Name, string Role, string Location, string Email);

public record Introduction(string Title, string Description);

public record Skill(string Name, string Icon);

public record Summary
{
    public required string Headline { get; init; }
    public required string SummaryText { get; init; }
    public required IReadOnlyCollection<EducationItem> Education { get; init; }
    public required IReadOnlyCollection<ExperienceItem> Experience { get; init; }
}

public record EducationItem(string Qualification, string Period, string Institution, string Details);

public record ExperienceItem
{
    public required string Title { get; init; }
    public required string Period { get; init; }
    public required string Organization { get; init; }
    public required IReadOnlyCollection<string> Responsibilities { get; init; }
}

public record TimelineItem(string Company, string Period, string Role, string Location);

public record ContactRequest
{
    public required string Name { get; init; }
    public required string Email { get; init; }
    public required string Message { get; init; }
}

public record ContactResponse(string Message);
