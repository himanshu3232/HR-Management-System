import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import AddEmployee from "./components/AddEmployee";
import Attendance from "./components/Attendance";
import Features from "./components/Features";
import LeaveManagement from "./components/LeaveManagement";
import Payroll from "./components/Payroll";
import Performance from "./components/Performance";
import NavBar from "./components/NavBar";


export default function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/add-employee" element={<AddEmployee />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/features" element={<Features />} />
          <Route path="/leave-management" element={<LeaveManagement />} />
          <Route path="/payroll" element={<Payroll />} />
          <Route path="/performance" element={<Performance />} />
        </Routes>
      </Router>
    </>
  )
}
