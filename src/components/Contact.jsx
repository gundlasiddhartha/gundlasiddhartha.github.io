import { useState } from 'react';
import Wave from './Wave';

const Contact = ({ isActive }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  if (!isActive) return null;

  return (
    <div id="contact">
      <div className="p-5 bg-primary text-white">
        <h2>Contact</h2>
        <p className="lead"></p>
      </div>
      <Wave variant="primary" />
      <div className="">
        <h3>Get in touch</h3>
        <p></p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="input-group input-group-lg">
              <div className="input-group-prepend">
                <span className="input-group-text bg-primary text-white">
                  <i className="fas fa-user"></i>
                </span>
              </div>
              <input
                type="text"
                className="form-control bg-dark text-white"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <div className="input-group-prepend">
                <span className="input-group-text bg-primary text-white">
                  <i className="fas fa-envelope"></i>
                </span>
              </div>
              <input
                type="email"
                className="form-control bg-dark text-white"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <div className="input-group-prepend">
                <span className="input-group-text bg-primary text-white">
                  <i className="fas fa-sticky-note"></i>
                </span>
              </div>
              <input
                type="text"
                className="form-control bg-dark text-white"
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <button type="submit" className="btn btn-primary btn-lg btn-block mb-3">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
