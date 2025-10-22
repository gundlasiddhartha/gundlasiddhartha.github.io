import { useEffect, useMemo, useState } from 'react';
import SectionWave from './components/SectionWave.jsx';
import Timeline from './components/Timeline.jsx';
import FollowMe from './components/FollowMe.jsx';
import { getPortfolio, submitContactForm } from './services/api.js';

const navItems = [
  { id: 'home', label: 'Home', icon: 'fas fa-home' },
  { id: 'resume', label: 'Resume', icon: 'fas fa-graduation-cap' },
  { id: 'work', label: 'Work', icon: 'fas fa-folder-open' },
  { id: 'contact', label: 'Contact', icon: 'fas fa-envelope' }
];

const fallbackPortfolio = {
  profile: {
    name: 'Siddhartha Gundla',
    role: 'Full Stack Web Developer',
    location: 'Hyderabad, India',
    email: 'gundlasiddhartha@gmail.com'
  },
  introduction: {
    title: 'Welcome to my page',
    description:
      "I'm a full stack web developer with 8+ years of experience designing and developing enterprise level applications."
  },
  skills: [
    { name: 'Angular', icon: 'fab fa-angular' },
    { name: 'JavaScript', icon: 'fab fa-js' },
    { name: 'CSS', icon: 'fab fa-css3' },
    { name: 'HTML', icon: 'fab fa-html5' },
    { name: 'Azure', icon: 'fas fa-cloud' },
    { name: 'ASP.NET Core', icon: 'fas fa-server' },
    { name: 'SQL Server', icon: 'fas fa-database' }
  ],
  summary: {
    headline: 'My Resume',
    summaryText:
      'Full stack developer with 8+ years of experience in designing and developing enterprise software. Currently working as Application Development Team Lead @ Accenture, Hyderabad.',
    education: [
      {
        qualification: 'B-Tech in EEE',
        period: '2009 - 2013',
        institution: 'Vellore Institute of Technology, Vellore, TN',
        details: 'Graduated from VIT with a GPA of 8.13.'
      }
    ],
    experience: [
      {
        title: 'Application Development Team Lead',
        period: '2018 - Present',
        organization: 'Accenture, Hyderabad, Telangana',
        responsibilities: [
          'Lead the design, development, and implementation of web components.',
          'Delegate tasks to the design team and provide counsel on all aspects of the project.'
        ]
      },
      {
        title: 'Associate - Projects',
        period: '2013 - 2018',
        organization: 'Cognizant, Chennai, Tamilnadu',
        responsibilities: [
          'Developed numerous marketing programs including logos, brochures, infographics, presentations, and advertisements.'
        ]
      }
    ]
  },
  timeline: [
    {
      company: 'Accenture',
      period: 'Jul 2019 – Present',
      role: 'Application Development Team Lead',
      location: 'Hyderabad, Telangana, India'
    },
    {
      company: 'Accenture',
      period: 'Feb 2018 – Jun 2019',
      role: 'Senior Software Engineer',
      location: 'Hyderabad, Telangana, India'
    },
    {
      company: 'Cognizant',
      period: 'Apr 2016 – Jan 2018',
      role: 'Associate - Projects',
      location: 'Chennai, Tamil Nadu, India'
    },
    {
      company: 'Cognizant',
      period: 'Sep 2014 – Mar 2016',
      role: 'Programmer Analyst',
      location: 'Chennai, Tamil Nadu, India'
    },
    {
      company: 'Cognizant',
      period: 'Sep 2013 – Aug 2014',
      role: 'Programmer Analyst Trainee',
      location: 'Chennai, Tamil Nadu, India'
    }
  ]
};

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [portfolio, setPortfolio] = useState(fallbackPortfolio);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState({ submitting: false, success: null, error: null });
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const groupedSkills = useMemo(() => {
    const columns = [[], [], []];
    portfolio.skills.forEach((skill, index) => {
      columns[index % columns.length].push(skill);
    });
    return columns;
  }, [portfolio.skills]);

  useEffect(() => {
    const controller = new AbortController();

    const fetchPortfolio = async () => {
      try {
        const data = await getPortfolio(controller.signal);
        setPortfolio({ ...fallbackPortfolio, ...data });
        setLoadError(null);
      } catch (error) {
        if (error.name !== 'AbortError') {
          setLoadError('Unable to load the latest profile information. Displaying cached content.');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchPortfolio();

    return () => controller.abort();
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection]);

  // Global scroll progress and back-to-top toggle
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
      const bar = document.getElementById('scroll-progress');
      if (bar) {
        bar.style.width = `${progress}%`;
      }
      // Reveal-on-scroll
      document.querySelectorAll('.reveal').forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          el.classList.add('reveal-in');
        }
      });
      setShowBackToTop(scrollTop > 300);
    };

    updateScrollProgress();
    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    window.addEventListener('resize', updateScrollProgress);
    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
      window.removeEventListener('resize', updateScrollProgress);
    };
  }, []);

  // Subtle tilt on skill cards
  useEffect(() => {
    const cards = document.querySelectorAll('.skill-box');
    if (!cards || cards.length === 0) return undefined;

    const handleMove = (event) => {
      const element = event.currentTarget;
      const rect = element.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rotateY = ((x / rect.width) - 0.5) * 10;
      const rotateX = -((y / rect.height) - 0.5) * 10;
      element.style.transform = `perspective(700px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-6px)`;
    };

    const handleLeave = (event) => {
      const element = event.currentTarget;
      element.style.transform = '';
    };

    cards.forEach((card) => {
      card.addEventListener('mousemove', handleMove);
      card.addEventListener('mouseleave', handleLeave);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener('mousemove', handleMove);
        card.removeEventListener('mouseleave', handleLeave);
      });
    };
  }, [groupedSkills]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormStatus({ submitting: true, success: null, error: null });

    try {
      const result = await submitContactForm(formData);
      setFormStatus({ submitting: false, success: result.message ?? 'Message sent successfully!', error: null });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setFormStatus({ submitting: false, success: null, error: 'Unable to send message right now. Please try again later.' });
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  return (
    <div className="app-root container-fluid p-0">
      <div id="scroll-progress" />
      <FollowMe />
      <header id="main-header">
        <div className="top-nav px-3 py-2">
          <div className="d-flex align-items-center gap-2">
            <span className="brand-badge">S</span>
            <span className="brand-name d-none d-sm-inline">Siddhartha</span>
          </div>
          <button
            type="button"
            className="btn btn-outline-light btn-sm d-lg-none"
            aria-expanded={isNavOpen}
            aria-controls="primary-nav"
            aria-label="Toggle navigation"
            onClick={() => setIsNavOpen((v) => !v)}
          >
            <i className={`fas ${isNavOpen ? 'fa-times' : 'fa-bars'}`} />
          </button>
          <ul id="primary-nav" className={`nav-links-min ${isNavOpen ? 'open' : ''}`}>
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  className={`nav-link-min ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => { setActiveSection(item.id); setIsNavOpen(false); }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <a className="download-btn d-none d-md-inline-flex" href="#" aria-label="Download CV">
            Download CV
            <i className="fas fa-download ms-2" />
          </a>
        </div>
      </header>

      <main className="content">
        {activeSection === 'home' && (
          <section>
            <div className="p-5 bg-primary text-white py-5 reveal">
              <h2>{portfolio.introduction.title}</h2>
              <p className="lead">{portfolio.introduction.description}</p>
            </div>
            <SectionWave />
            <div className="container-fluid px-4 py-5 reveal">
              <h3>My Skills</h3>
              {isLoading && <p className="text-muted">Loading the latest data...</p>}
              {loadError && <p className="text-warning">{loadError}</p>}
              <hr className="bg-primary" />
              <div className="p-5">
                <div className="row">
                  {groupedSkills.map((column, columnIndex) => (
                    <div key={`column-${columnIndex}`} className="col">
                      {column.map((skill) => (
                        <div key={skill.name} className="skill-box text-center bg-light">
                          <i className={`${skill.icon} fa-4x skill-icon`} aria-hidden="true" />
                          <h3 className="mt-4">{skill.name}</h3>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'resume' && (
          <section className="resume">
            <div className="p-5 bg-primary text-white reveal">
              <h2>{portfolio.summary.headline}</h2>
              <p className="lead">{portfolio.summary.summaryText}</p>
            </div>
            <SectionWave />
            <div className="row px-4 py-5 reveal">
              <div className="col-lg-6">
                <h3 className="resume-title">Summary</h3>
                <div className="resume-item pb-0">
                  <h4>{portfolio.profile.name}</h4>
                  <p>
                    <em>{portfolio.summary.summaryText}</em>
                  </p>
                  <ul>
                    <li>{portfolio.profile.location}</li>
                    <li>{portfolio.profile.email}</li>
                  </ul>
                </div>
                <h3 className="resume-title">Education</h3>
                {portfolio.summary.education.map((education) => (
                  <div className="resume-item" key={`${education.qualification}-${education.period}`}>
                    <h4>{education.qualification}</h4>
                    <h5>{education.period}</h5>
                    <p>
                      <em>{education.institution}</em>
                    </p>
                    <p>{education.details}</p>
                  </div>
                ))}
              </div>
              <div className="col-lg-6">
                <h3 className="resume-title">Professional Experience</h3>
                {portfolio.summary.experience.map((experience) => (
                  <div className="resume-item" key={`${experience.title}-${experience.period}`}>
                    <h4>{experience.title}</h4>
                    <h5>{experience.period}</h5>
                    <p>
                      <em>{experience.organization}</em>
                    </p>
                    <ul>
                      {experience.responsibilities.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeSection === 'work' && (
          <section>
            <div className="p-5 bg-primary text-white py-5 reveal">
              <h2>My Work</h2>
              <p className="lead">A quick overview of my professional journey.</p>
            </div>
            <SectionWave />
            <div className="reveal">
              <Timeline items={portfolio.timeline} />
            </div>
          </section>
        )}

        {activeSection === 'contact' && (
          <section>
            <div className="p-5 bg-primary text-white reveal">
              <h2>Contact</h2>
              <p className="lead">Let&apos;s build something great together.</p>
            </div>
            <SectionWave />
            <div className="px-4 py-5 reveal">
              <h3>Get in touch</h3>
              <form className="mt-4" onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="name">
                      Name
                    </label>
                    <div className="input-group input-group-lg">
                      <span className="input-group-text bg-primary text-white">
                        <i className="fas fa-user" aria-hidden="true" />
                      </span>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className="form-control bg-light"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="email">
                      Email
                    </label>
                    <div className="input-group input-group-lg">
                      <span className="input-group-text bg-primary text-white">
                        <i className="fas fa-envelope" aria-hidden="true" />
                      </span>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="form-control bg-light"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <label className="form-label" htmlFor="message">
                      Message
                    </label>
                    <div className="input-group input-group-lg">
                      <span className="input-group-text bg-primary text-white">
                        <i className="fas fa-sticky-note" aria-hidden="true" />
                      </span>
                      <textarea
                        id="message"
                        name="message"
                        className="form-control bg-light"
                        placeholder="Tell me about your project"
                        rows="4"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <button className="btn btn-primary btn-lg" type="submit" disabled={formStatus.submitting}>
                    {formStatus.submitting ? 'Submitting...' : 'Submit'}
                  </button>
                </div>
              </form>
              {formStatus.success && <p className="text-success mt-3">{formStatus.success}</p>}
              {formStatus.error && <p className="text-danger mt-3">{formStatus.error}</p>}
            </div>
          </section>
        )}
      </main>

      <footer id="main-footer" className="p-5 bg-primary text-center lead text-white">
        &copy; {new Date().getFullYear()} Siddhartha Gundla. All rights reserved.
      </footer>
      {showBackToTop && (
        <button
          type="button"
          className="btn btn-primary position-fixed"
          style={{ right: '20px', bottom: '20px', zIndex: 999 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
        >
          <i className="fas fa-arrow-up" />
        </button>
      )}
    </div>
  );
};

export default App;
