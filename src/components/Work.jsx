import { useEffect } from 'react';
import Wave from './Wave';

const Work = ({ isActive }) => {
  useEffect(() => {
    if (!isActive) return;

    const items = document.querySelectorAll('.timeline li');

    const isElementInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    const callbackFunc = () => {
      for (let i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add('in-view');
        }
      }
    };

    window.addEventListener('scroll', callbackFunc);
    window.addEventListener('resize', callbackFunc);
    callbackFunc(); // Initial check

    return () => {
      window.removeEventListener('scroll', callbackFunc);
      window.removeEventListener('resize', callbackFunc);
    };
  }, [isActive]);

  if (!isActive) return null;

  const workExperience = [
    {
      company: 'Accenture',
      period: 'Jul 2019 – Present',
      position: 'Application Development Team Lead',
      location: 'Hyderabad, Telangana, India',
    },
    {
      company: 'Accenture',
      period: 'Feb 2018 – Jun 2019',
      position: 'Senior Software Engineer',
      location: 'Hyderabad, Telangana, India',
    },
    {
      company: 'Cognizant',
      period: 'Apr 2016 – Jan 2018',
      position: 'Associate - Projects',
      location: 'Chennai, Tamil Nadu, India',
    },
    {
      company: 'Cognizant',
      period: 'Sep 2014 – Mar 2016',
      position: 'Programmer Analyst',
      location: 'Chennai, Tamil Nadu, India',
    },
    {
      company: 'Cognizant',
      period: 'Sep 2013 – Aug 2014',
      position: 'Programmer Analyst Tainee',
      location: 'Chennai, Tamil Nadu, India',
    },
  ];

  return (
    <div id="work">
      <div className="p-5 bg-primary text-white py-5">
        <h2>My Work</h2>
        <p className="lead"></p>
      </div>
      <Wave variant="primary" />
      <section className="timeline">
        <ul>
          {workExperience.map((work, index) => (
            <li key={index}>
              <div className="text-white">
                <h6 className="h4">{work.company}</h6>
                <time>{work.period}</time>
                <p>{work.position}</p>
                <p>{work.location}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Work;
