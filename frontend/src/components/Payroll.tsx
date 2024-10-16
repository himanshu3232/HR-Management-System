export default function Payroll() {
  return (
    <>
      <main>
        <section id="payroll-processing">
          <h2>Payroll Processing</h2>
          <form id="payrollForm">
            <input
              type="number"
              name="employee_id"
              placeholder="Employee ID"
              required
              aria-label="Employee ID"
            />
            <input
              type="number"
              name="month"
              placeholder="Month"
              required
              aria-label="Month"
            />
            <input
              type="number"
              name="year"
              placeholder="Year"
              required
              aria-label="Year"
            />
            <button type="submit">Generate Payslip</button>
          </form>
          <div id="payslip" className="payroll-summary"></div>
        </section>
      </main>
    </>
  );
}
