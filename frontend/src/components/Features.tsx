import { Link } from "react-router-dom";

export default function Features() {
  return (
    <>
      <main>
        <section id="features">
          <h2>Our Features</h2>
          <p>Click the buttons below to access each feature:</p>
          <ul>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/add-employee">Add Employee</Link>
            </li>
            <li>
              <Link to="/attendance">Attendance Tracking</Link>
            </li>
            <li>
              <Link to="/payroll">Payroll Processing</Link>
            </li>
            <li>
              <Link to="/performance">Performance Management</Link>
            </li>
            <li>
              <Link to="/leave-management">Leave Management</Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
