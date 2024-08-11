import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for toast notifications
import './registration.css'; // Import the CSS file for custom styles

const Registration = () => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return; // Prevent multiple submissions

    setIsSubmitting(true);

    try {
      const response = await fetch("https://sheet.best/api/sheets/56b2780e-1017-41db-8531-eca120703ecb", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        toast.success('Form submitted successfully!');
        setFormData({ id: '', name: '', email: '', phone: '' }); // Clear the form
        console.log('Response:', result);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      toast.error('Error submitting form. Please try again.');
      console.error('Error:', error);
    } finally {
      setTimeout(() => {
        setIsSubmitting(false);
      }, 5000); // 5-second delay before re-enabling the submit button
    }
  };

  return (
    <div className="formbhardo">


  
    <div className="form-container">
      <h1 className="form-title">Registration Form</h1>
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-group">
          <label>ID:</label>
          <input
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="submit-button"
          disabled={isSubmitting} // Disable the button while submitting
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
      <ToastContainer />
    </div>
    </div>
  );
};

export default Registration;
