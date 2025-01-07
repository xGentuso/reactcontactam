import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ContactList from './components/ContactList';
import CreateContact from './components/CreateContact';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="/create-contact" element={<CreateContact />} />
          <Route path="/contact/:id" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
