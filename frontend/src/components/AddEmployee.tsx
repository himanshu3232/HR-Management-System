export default function AddEmployee() {
  return (
    <>
      <main>
        <section id="employee-management">
          <h2>Employee Management</h2>
          <form id="employeeForm">
            <input
              type="text"
              name="name"
              placeholder="Employee Name"
              required
              aria-label="Employee Name"
            />
            <input
              type="text"
              name="contact_details"
              placeholder="Contact Details"
              required
              aria-label="Contact Details"
            />
            <input
              type="text"
              name="job_role"
              placeholder="Job Role"
              required
              aria-label="Job Role"
            />
            <input
              type="number"
              name="salary"
              placeholder="Salary"
              required
              aria-label="Salary"
            />
            <input
              type="text"
              name="performance"
              placeholder="Performance"
              required
              aria-label="Performance"
            />
            <button type="submit">Add Employee</button>
          </form>
          <div id="employeeList" className="employee-info"></div>
        </section>
      </main>
    </>
  );
}
