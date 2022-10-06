import './App.css';
import { Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';

function App() {
  return (
    <div>
        <Home />
        <Routes>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
    </div>
  );
}

export default App;
