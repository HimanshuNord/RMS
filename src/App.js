import Home from './components/Home'
import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AccountSettings from './components/AccountSettings';
import About from './components/About'
import Nav from './components/Nav';
import Register from './components/Register';
import Footer from './components/Footer';
import { useState } from 'react';
import Faq from './components/Faq'
import FaqSearch from './components/FaqSearch';

function App() {
  const [search, setSearch] = useState('')
  return (
    <>
      <Router basename={`${process.env.PUBLIC_URL}`}>
        <Nav/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/AccountSettigs" element={<AccountSettings />} />
          <Route path="/About" element={<About />}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/Faq" element={<Faq setSearch={setSearch} search={search} />} />
          <Route path="FaqSearch" element={<FaqSearch search={search} />} />
        </Routes>
        <Footer />
      </Router>

      </>
  );
}

export default App;
