import "./App.css";
import { Routes, Route } from "react-router-dom";
import ViewHotels from "./components/ViewHotels";
import ViewRooms from "./components/ViewRooms";
import DashboardHome from "./pages/DashboardHome";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/viewhotels" element={<ViewHotels />}></Route>
        <Route path="/viewrooms" element={<ViewRooms />}></Route>
        <Route path="/dashboardhome" element={<DashboardHome />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
