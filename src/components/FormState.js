import { useState } from 'react';
import Card from './Card';

export default function FormState() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <Card>
      <form id="info-form" onSubmit={handleSubmit}>
        <div>
          <label>Full Name:</label>
          <input 
            type="text" 
            id="fullName" 
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            id="email" 
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input 
            type="password" 
            id="password" 
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input 
            type="password" 
            id="confirmPassword" 
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
}

