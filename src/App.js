import React from 'react';
import Hello from './foodi/hello';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

// Component imports
import Foodi from './foodi';

// Bootstrap and Font Awesome imports
import 'bootswatch/dist/simplex/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Routes>
          <Route path='/*'
            element={<Foodi />} />
          <Route path='/hello'
            element={<Hello />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
