import logo from './logo.svg';
import './App.css';
import AuthForm from './AuthForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import { NavLink } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
            <Route path="/" element={<div style={{textAlign: 'center', marginTop: '50px'}}><h2>Welcome to My Website</h2></div>} />
            <Route path="/login" className={({ isActive }) => isActive ? "active-link" : "header-btn"} element={<Login />} />
            <Route path="/register" className={({ isActive }) => isActive ? "active-link" : "header-btn"} element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
