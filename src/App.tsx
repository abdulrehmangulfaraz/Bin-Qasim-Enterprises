import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Admin from './pages/Admin';
import Login from './pages/Login';


function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;