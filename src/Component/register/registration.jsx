import   { useState } from 'react';
import axios from 'axios';
import "./registration";

const API_KEY = 'AIzaSyBH-f3GTKxqA0a2_seVBN67tOxHrhejClU';
const SPREADSHEET_ID = '1uJuNGLLjpK4vALR613nVUIkm1Qdmu7767SmWB30UN2w';
const RANGE = 'Sheet1!A1:D1'; // Adjust according to your sheet structure

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const values = [
      [formData.name, formData.email, formData.message], // This should match the structure of your Google Sheet
    ];

    const body = {
      values,
    };

    axios.post(
      `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}:append?valueInputOption=RAW&key=${API_KEY}`,
      {
        values: [["Data1", "Data2", "Data3"]], // Replace with your actual data
      }
    )
    .then(response => {
      console.log('Data appended successfully:', response.data);
    })
    .catch(error => {
      console.error('Error appending data:', error);
    });
    
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      
    }}>
      <h1>Submit Data to Google Sheets</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

// export default FormSubmit;

export default Registration;


//// AKfycbybDm0y4t4DzPE4UZ4fmoJeJzpBDyro9zPhTTIC_Z-5889G-i4TQ6c2Nlu7u3F34D3O deployment id
///     const Sheet_Url="https://script.google.com/macros/s/AKfycbybDm0y4t4DzPE4UZ4fmoJeJzpBDyro9zPhTTIC_Z-5889G-i4TQ6c2Nlu7u3F34D3O/exec"