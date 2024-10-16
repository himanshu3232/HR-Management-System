export default function LeaveManagement() {
  return (
    <>
      <main>
        <section id="leave-management">
          <h2>Leave Management</h2>
          <form id="leaveForm">
            <input
              type="number"
              name="employee_id"
              placeholder="Employee ID"
              required
              aria-label="Employee ID"
            />
            <input
              type="text"
              name="leave_type"
              placeholder="Leave Type (e.g., Sick, Vacation)"
              required
              aria-label="Leave Type"
            />
            <input
              type="date"
              name="start_date"
              required
              aria-label="Start Date"
            />
            <input type="date" name="end_date" required aria-label="End Date" />
            <button type="submit">Request Leave</button>
          </form>
          <div id="leaveList"></div>
        </section>
      </main>
    </>
  );
}
