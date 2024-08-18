import React, { useState } from 'react';
import './Portfolio.css'; // Import the CSS file

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    address: '',
    content: '',
    role: 'student' // Default value for the role
  });

  const [formStatus, setFormStatus] = useState(''); // To hold the status of the form submission

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/mwpenejz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('Form submitted successfully!');
        setFormData({
          name: '',
          email: '',
          number: '',
          address: '',
          Introduction: '',
          role: 'student',
        });
      } else {
        setFormStatus('Failed to submit the form. Please try again.');
      }
    } catch (error) {
      setFormStatus('An error occurred. Please try again.');
    }
  };

  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        <i className='bx bxs-contact'></i>Contact <span>Us!</span>
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="role-selection">
          <label>
            <input
              type="radio"
              name="role"
              value="student"
              checked={formData.role === 'student'}
              onChange={handleChange}
            />
            Student
          </label>
          <label>
            <input
              type="radio"
              name="role"
              value="teacher"
              checked={formData.role === 'teacher'}
              onChange={handleChange}
            />
            Teacher
          </label>
        </div>
        <div className="input-box">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="input-box">
          <input
            type="number"
            name="number"
            id="number"
            placeholder="Mobile Number"
            value={formData.number}
            onChange={handleChange}
          />
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
      
        <textarea
          name="content"
          id="content"
          rows="8"
          cols="20"
          placeholder="Your Introduction"
          value={formData.content}
          onChange={handleChange}
        ></textarea>
        <input type="submit" value="Submit" className="btn" />
      </form>

      {formStatus && <div className="alert">{formStatus}</div>}
    </section>
  );
};

export default ContactForm;
