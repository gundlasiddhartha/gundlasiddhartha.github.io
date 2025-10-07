import Wave from './Wave';

const Resume = ({ isActive }) => {
  if (!isActive) return null;

  return (
    <div id="resume">
      <section className="resume">
        <div className="p-5 bg-primary text-white">
          <h2>My Resume</h2>
          <p className="lead"></p>
        </div>
        <Wave variant="primary" />
        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <h4>Siddhartha Gundla</h4>
              <p>
                <em>
                  Full stack developer with 8+ years of experiece in desinging and developing enterprise level
                  software. Currently working as Application Development Team Lead @ Accenture, Hyd
                </em>
              </p>
              <ul>
                <li>Hyderabad, India</li>
                <li>gundlasiddhartha@gmail.com</li>
              </ul>
            </div>
            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>B-Tech in EEE</h4>
              <h5>2009 - 2013</h5>
              <p><em>Velore Institute of Technology, Vellore, TN</em></p>
              <p>Graduated from VIT with a GPA of 8.13</p>
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Application Development Team Lead</h4>
              <h5>2018 - Present</h5>
              <p><em>Accenture, Hyderabad, Telangana</em></p>
              <ul>
                <li>Lead in the design, development, and implementation of the Web Components</li>
                <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Associate - Projects</h4>
              <h5>2013 - 2018</h5>
              <p><em>Cognizant, Chennai, Tamilnadu</em></p>
              <ul>
                <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
