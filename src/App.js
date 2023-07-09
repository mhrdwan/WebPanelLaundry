import './App.css';
import Login from './Component/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './Page/Dashboard';
import PrivateRoute from './Page/PrivateRoute';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
