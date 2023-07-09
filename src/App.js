import './App.css';
import Login from './Component/Login';
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import Dashboard from './Page/Dashboard';
import PrivateRoute from './Page/PrivateRoute';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
