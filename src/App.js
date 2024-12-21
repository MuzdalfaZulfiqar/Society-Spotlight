// App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Society from './components/Society';
import About from './components/About';
import AllSocieties from './components/AllSocieties';
import Contact from './components/Contact';
import JoinNowForm from "./components/JoinNowForm"
import AdminDashboard from "./components/AdminDashboard"
import SocietyState from './contexts/SocietyState';
function App() {
  return (
    <>
    
    <SocietyState>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/onesociety" element={<Society />} />
        <Route path="/JoinNowForm" element={<JoinNowForm />} />
        <Route path="/society" element={<AllSocieties />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/AdminDashboard" element={<AdminDashboard />} /> */}
        <Route path="/" element={<AdminDashboard />} />
      </Routes>
      </SocietyState>
    </>
  );
}

export default App;

