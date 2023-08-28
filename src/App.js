import Home from './components/Home'
import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AccountSettings from './components/AccountSettings';
import About from './components/About'
import Nav from './components/Nav';
import Register from './components/Register';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router basename={`/RMS/${process.env.PUBLIC_URL}`}>
        <Nav/>
        <Routes>
          <Route exact path='/RMS' element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/AccountSettigs" element={<AccountSettings />} />
          <Route path="/About" element={<About />}/>
          <Route path="/Register" element={<Register/>}/>
        </Routes>
        <Footer />
      </Router>

      </>
  );
}

export default App;
