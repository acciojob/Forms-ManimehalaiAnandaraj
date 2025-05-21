import { useState } from 'react';
import Card from './Card';

const FormState=() => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    password: '',
    password_confirmation: ''
  });

  const handleChange = (e) => {
   const {id,value} =e.target;
   setFormData(prev => ({
    ...prev,
    [id] : value
     }));
  };

  const handleSubmit = (e) => {
   e.preventDefault();
   console.log('Form submitted with useState',formData);
  };

  return (
    <Card>
      <form id="info-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor='full_name'>Full Name:</label>
          <input 
            type="text" 
            id="full_name" 
            value={formData.full_name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor='email'>Email:</label>
          <input 
            type="email" 
            id="email" 
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor='password'>Password:</label>
          <input 
            type="password" 
            id="password" 
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor='password_confirmation'>Confirm Password:</label>
          <input 
            type="password" 
            id="confirmPassword" 
            value={formData.password_confirmation}
            onChange={handleChange}
          />
        </div>
        
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
}

export default FormState;