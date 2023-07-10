import './App.css';
import Login from './Component/Login';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Dashboard from './Page/Dashboard';
import PrivateRoute from './Page/PrivateRoute';
import NavbarSide from './NavbarSide/NavbarSide';
import Paket from './Page/Paket';
import Promo from './Page/Promo';

function MainContent() {
  const location = useLocation();
  const showNavbar = location.pathname !== '/' && location.pathname !== '/login';

  // Add these lines
  const contentStyle = showNavbar
  ? { display: 'flex', flexGrow: 1, overflow: 'auto' }
  : { display: 'flex', justifyContent: 'center', flexGrow: 1, overflow: 'auto' };

  return (
    <div style={contentStyle}>
      {showNavbar && <NavbarSide />}
      <Routes style={{ flexGrow: 1 }}>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/paket" element={<Paket />} />
        <Route path="/promo" element={<Promo />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>

    </div>
  );
}

function App() {
  return (
    <div className='App'>
      <Router>
        <MainContent />
      </Router>
    </div>
  );
}

export default App;
