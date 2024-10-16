package com.hrms.HR_MS.service;

import com.hrms.HR_MS.entity.Employee;
import com.hrms.HR_MS.exception.EmployeeNotFoundException;
import com.hrms.HR_MS.entity.pojo.Attendance;
import com.hrms.HR_MS.repository.EmployeeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EmployeeService {

    @Autowired
    private final EmployeeRepository employeeRepository;

    public Attendance getAttendance(Long id) throws EmployeeNotFoundException{
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new EmployeeNotFoundException("Employee not found"));

        return employee.getAttendance();
    }

    public Attendance updateAttendance(Attendance attendance, Long id) throws EmployeeNotFoundException{
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new EmployeeNotFoundException("Employee not found"));


        employee.setAttendance(attendance);

        return employeeRepository.save(employee).getAttendance();
    }

    public Employee getEmployeeById(Long id) throws EmployeeNotFoundException{
        return employeeRepository.findById(id)
                .orElseThrow(() -> new EmployeeNotFoundException("Employee not found"));
    }

    public Employee addEmployee(Employee employee){
        return employeeRepository.save(employee);
    }

}
