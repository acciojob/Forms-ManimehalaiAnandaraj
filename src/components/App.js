//import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import React from 'react';
import Form from './Form';
import FormRef from './FormRef';
import FormState from './FormState';

 function App() {
  return (
    <Router>
      <nav>
        <Link to="/form" id="form-link">Section 1</Link> | 
        <Link to="/form-ref" id="form-ref-link">Section 2</Link> | 
        <Link to="/form-state" id="form-state-link">Section 3</Link>
      </nav>

      <Routes>
        <Route path="/form" element={<Form />} />
        <Route path="/form-ref" element={<FormRef />} />
        <Route path="/form-state" element={<FormState />} />
      </Routes>
    </Router>
  );
}

export default App;
