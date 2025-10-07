import Wave from './Wave';

const Home = ({ isActive }) => {
  if (!isActive) return null;

  const skills = [
    { icon: 'fab fa-angular', name: 'Angular' },
    { icon: 'fab fa-js', name: 'JavaScript' },
    { icon: 'fab fa-css3', name: 'CSS' },
    { icon: 'fab fa-html5', name: 'HTML' },
  ];

  const additionalSkills = [
    { icon: 'fas fa-cloud', name: 'Azure' },
    { icon: 'fas fa-server', name: 'ASP.NET Core' },
    { icon: 'fas fa-database', name: 'SQL Server' },
  ];

  return (
    <div id="home">
      <div className="p-5 bg-primary text-white py-5">
        <h2>Welcome to my page</h2>
        <p className="lead">
          I&apos;am a full stack web developer with 8+ Years of experience in design and developing
          enterprise level applications
        </p>
      </div>
      <Wave variant="primary" />
      <div className="container py-5">
        <h3>My Skills</h3>
        <p className="lead">
          Over the years i have worked on several technologies, here are some in which i
          had much more exposure than others...
        </p>
        <hr className="bg-primary" />
        <div className="p-5">
          <div className="row">
            {skills.map((skill, index) => (
              <div key={index} className="col skill-box">
                <i className={`${skill.icon} fa-4x skill-icon`}></i>
                <h3>{skill.name}</h3>
              </div>
            ))}
          </div>
          <div className="row">
            {additionalSkills.map((skill, index) => (
              <div key={index} className="col skill-box">
                <i className={`${skill.icon} fa-4x skill-icon`}></i>
                <h3>{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
