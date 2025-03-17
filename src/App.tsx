import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SimpleBank from "./pages/SimpleBank";
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import BankHome from './pages/BankHomePage';
import BankHomePage from './pages/BankHomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/simple-bank" element={<SimpleBank />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/bank-homepage" element={<BankHomePage />}/>
      </Routes>
    </Router>
  );
}

export default App;
