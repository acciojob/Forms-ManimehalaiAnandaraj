import { useRef } from 'react';
import Card from './Card';

const FormRef= () => {
  const formRef = useRef(null);
  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordconfirmationRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData ={
      full_name: fullNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation:passwordconfirmationRef.current.value
     
    };
    console.log("Form submitted with useRef",formData);
  };

  return (
    <Card>
      <form id="info-form" onSubmit={handleSubmit} ref={formRef}>
        <div>
          <label htmlFor='full_name'>Full Name:</label>
          <input type="text" id="full_name" ref={fullNameRef} />
        </div>

        <div>
          <label htmlFor='email'>Email:</label>
          <input type="email" id="email" ref={emailRef} />
        </div>

        <div>
          <label htmlFor='password'>Password:</label>
          <input type="password" id="password" ref={passwordRef} />
        </div>
        <div>
          <label htmlFor='password_confirmation'>Confirm Password:</label>
          <input type="password" id="password_confirmation" ref={passwordconfirmationRef} />
        </div>
        
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
}

export default FormRef;
