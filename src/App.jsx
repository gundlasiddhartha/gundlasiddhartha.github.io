import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.scss';
import Header from './components/Header';
import Home from './components/Home';
import Resume from './components/Resume';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="container">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="content">
        <Home isActive={activeSection === 'home'} />
        <Resume isActive={activeSection === 'resume'} />
        <Work isActive={activeSection === 'work'} />
        <Contact isActive={activeSection === 'contact'} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
