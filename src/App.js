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

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<AllSocieties />} />
        <Route path="/society" element={<Society />} />
        <Route path="/about" element={<About />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;