using Microsoft.AspNetCore.Mvc;
using Portfolio.Api.Models;

namespace Portfolio.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PortfolioController : ControllerBase
{
    [HttpGet]
    [ProducesResponseType(typeof(PortfolioResponse), StatusCodes.Status200OK)]
    public IActionResult GetPortfolio()
    {
        var response = new PortfolioResponse
        {
            Profile = new Profile(
                Name: "Siddhartha Gundla",
                Role: "Full Stack Web Developer",
                Location: "Hyderabad, India",
                Email: "gundlasiddhartha@gmail.com"
            ),
            Introduction = new Introduction(
                Title: "Welcome to my page",
                Description: "I'm a full stack web developer with 8+ years of experience designing and developing enterprise level applications."
            ),
            Skills = new List<Skill>
            {
                new("Angular", "fab fa-angular"),
                new("JavaScript", "fab fa-js"),
                new("CSS", "fab fa-css3"),
                new("HTML", "fab fa-html5"),
                new("Azure", "fas fa-cloud"),
                new("ASP.NET Core", "fas fa-server"),
                new("SQL Server", "fas fa-database")
            },
            Summary = new Summary
            {
                Headline = "My Resume",
                SummaryText = "Full stack developer with 8+ years of experience in designing and developing enterprise software. Currently working as Application Development Team Lead @ Accenture, Hyderabad.",
                Education = new List<EducationItem>
                {
                    new("B-Tech in EEE", "2009 - 2013", "Vellore Institute of Technology, Vellore, TN", "Graduated from VIT with a GPA of 8.13.")
                },
                Experience = new List<ExperienceItem>
                {
                    new ExperienceItem
                    {
                        Title = "Application Development Team Lead",
                        Period = "2018 - Present",
                        Organization = "Accenture, Hyderabad, Telangana",
                        Responsibilities = new List<string>
                        {
                            "Lead the design, development, and implementation of web components.",
                            "Delegate tasks to the design team and provide counsel on all aspects of the project."
                        }
                    },
                    new ExperienceItem
                    {
                        Title = "Associate - Projects",
                        Period = "2013 - 2018",
                        Organization = "Cognizant, Chennai, Tamilnadu",
                        Responsibilities = new List<string>
                        {
                            "Developed numerous marketing programs including logos, brochures, infographics, presentations, and advertisements."
                        }
                    }
                }
            },
            Timeline = new List<TimelineItem>
            {
                new("Accenture", "Jul 2019 – Present", "Application Development Team Lead", "Hyderabad, Telangana, India"),
                new("Accenture", "Feb 2018 – Jun 2019", "Senior Software Engineer", "Hyderabad, Telangana, India"),
                new("Cognizant", "Apr 2016 – Jan 2018", "Associate - Projects", "Chennai, Tamil Nadu, India"),
                new("Cognizant", "Sep 2014 – Mar 2016", "Programmer Analyst", "Chennai, Tamil Nadu, India"),
                new("Cognizant", "Sep 2013 – Aug 2014", "Programmer Analyst Trainee", "Chennai, Tamil Nadu, India")
            }
        };

        return Ok(response);
    }
}
