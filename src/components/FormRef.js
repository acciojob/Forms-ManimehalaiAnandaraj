import { useRef } from 'react';
import Card from './Card';

export default function FormRef() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value
    });
  };

  return (
    <Card>
      <form id="info-form" onSubmit={handleSubmit}>
        <div>
          <label>Full Name:</label>
          <input type="text" id="full_name" ref={nameRef} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" id="email" ref={emailRef} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" id="password" ref={passwordRef} />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type="password" id="password_confirmation" ref={confirmRef} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
}
