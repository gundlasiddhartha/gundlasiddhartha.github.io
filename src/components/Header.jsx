const Header = ({ setActiveSection }) => {
  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <header id="main-header">
      <div className="row no-gutters align-items-end bg-primary">
        <div className="col-lg-4 col-md-5 p-5 d-md-none d-lg-block">
          <img src="/img/person1.png" className="rounded rounded-circle" alt="siddhartha photo" />
        </div>
        <div className="col">
          <div className="d-flex flex-column">
            <div className="p-5 text-white">
              <div className="d-flex flex-row justify-content-between align-items-center">
                <div>
                  <h1 className="display-4">Siddhartha Gundla</h1>
                  <p className="h3">Full Stack Web Developer</p>
                  <hr className="bg-white" />
                </div>
              </div>
            </div>
            <div>
              <div className="d-flex flex-row text-white text-center align-items-stretch">
                <div 
                  className="port-item p-4" 
                  onClick={() => handleNavClick('home')}
                  style={{ cursor: 'pointer' }}
                >
                  <i className="fas fa-home fa-2x d-block"></i>
                  <span className="d-none d-sm-block">Home</span>
                </div>
                <div 
                  className="port-item p-4" 
                  onClick={() => handleNavClick('resume')}
                  style={{ cursor: 'pointer' }}
                >
                  <i className="fas fa-graduation-cap fa-2x d-block"></i>
                  <span className="d-none d-sm-block">Resume</span>
                </div>
                <div 
                  className="port-item p-4" 
                  onClick={() => handleNavClick('work')}
                  style={{ cursor: 'pointer' }}
                >
                  <i className="fas fa-folder-open fa-2x d-block"></i>
                  <span className="d-none d-sm-block">Work</span>
                </div>
                <div 
                  className="port-item p-4" 
                  onClick={() => handleNavClick('contact')}
                  style={{ cursor: 'pointer' }}
                >
                  <i className="fas fa-envelope fa-2x d-block"></i>
                  <span className="d-none d-sm-block">Contact</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
