export default function Performance() {
  return (
    <>
      <main>
        <section id="performance-management">
          <h2>Performance Management</h2>
          <form id="performanceForm">
            <input
              type="number"
              name="employee_id"
              placeholder="Employee ID"
              required
              aria-label="Employee ID"
            />
            <input
              type="text"
              name="goal"
              placeholder="Performance Goal"
              required
              aria-label="Performance Goal"
            />
            <textarea
              name="comments"
              placeholder="Comments"
              aria-label="Comments"
            ></textarea>
            <button type="submit">Submit Review</button>
          </form>
          <div id="performanceList" className="performance-summary"></div>
        </section>
      </main>
    </>
  );
}
