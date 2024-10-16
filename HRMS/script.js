// script.js

// Function to handle Employee Management
document.addEventListener("DOMContentLoaded", function () {
    const employeeForm = document.getElementById('employeeForm');
    if (employeeForm) {
        employeeForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const name = employeeForm.name.value;
            const contactDetails = employeeForm.contact_details.value;
            const jobRole = employeeForm.job_role.value;
            const salary = employeeForm.salary.value;

            // Simulating employee addition (You can enhance this to store data)
            const employeeList = document.getElementById('employeeList');
            employeeList.innerHTML += `<p>${name}, ${contactDetails}, ${jobRole}, $${salary}</p>`;
            employeeForm.reset();
        });
    }

    // Functionality for Attendance Tracking
    const checkInBtn = document.getElementById('checkInBtn');
    const checkOutBtn = document.getElementById('checkOutBtn');

    let checkInCount = 0;
    let checkOutCount = 0;

    if (checkInBtn) {
        checkInBtn.addEventListener('click', function () {
            checkInCount++;
            document.getElementById('checkInCount').innerText = checkInCount;
            updateAttendanceSummary();
        });
    }

    if (checkOutBtn) {
        checkOutBtn.addEventListener('click', function () {
            checkOutCount++;
            document.getElementById('checkOutCount').innerText = checkOutCount;
            updateAttendanceSummary();
        });
    }

    function updateAttendanceSummary() {
        const daysPresent = checkInCount;
        const daysAbsent = (checkInCount + checkOutCount) - daysPresent;
        document.getElementById('daysPresent').innerText = daysPresent;
        document.getElementById('daysAbsent').innerText = daysAbsent;
    }

    // Functionality for Payroll Processing
    const payrollForm = document.getElementById('payrollForm');
    if (payrollForm) {
        payrollForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const employeeId = payrollForm.employee_id.value;
            const month = payrollForm.month.value;
            const year = payrollForm.year.value;

            // Simulate payslip generation
            const payslip = document.getElementById('payslip');
            payslip.innerHTML = `<p>Generated Payslip for Employee ID: ${employeeId} for ${month}/${year}</p>`;
            payrollForm.reset();
        });
    }

    // Functionality for Performance Management
    const performanceForm = document.getElementById('performanceForm');
    if (performanceForm) {
        performanceForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const employeeId = performanceForm.employee_id.value;
            const goal = performanceForm.goal.value;
            const comments = performanceForm.comments.value;

            // Simulate performance review submission
            const performanceList = document.getElementById('performanceList');
            performanceList.innerHTML += `<p>Review for Employee ID: ${employeeId} - Goal: ${goal}. Comments: ${comments}</p>`;
            performanceForm.reset();
        });
    }

    // Functionality for Leave Management
    const leaveForm = document.getElementById('leaveForm');
    if (leaveForm) {
        leaveForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const employeeId = leaveForm.employee_id.value;
            const leaveType = leaveForm.leave_type.value;
            const startDate = leaveForm.start_date.value;
            const endDate = leaveForm.end_date.value;

            // Simulate leave request submission
            const leaveList = document.getElementById('leaveList');
            leaveList.innerHTML += `<p>Leave Request for Employee ID: ${employeeId}, Type: ${leaveType}, From: ${startDate} to ${endDate}</p>`;
            leaveForm.reset();
        });
    }
});
