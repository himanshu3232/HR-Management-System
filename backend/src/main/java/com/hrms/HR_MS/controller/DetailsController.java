package com.hrms.HR_MS.controller;

import com.hrms.HR_MS.dto.EmployeeDto;
import com.hrms.HR_MS.dto.mapper.EmployeeDtoMapper;
import com.hrms.HR_MS.entity.Employee;
import com.hrms.HR_MS.entity.pojo.Benefits;
import com.hrms.HR_MS.service.EmployeeService;
import com.hrms.HR_MS.entity.pojo.Payment;
import com.hrms.HR_MS.entity.pojo.Performance;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
public class DetailsController {

    @Autowired
    private final EmployeeService employeeService;

    @GetMapping("/get-details/{id}")
    public ResponseEntity<EmployeeDto> getEmployeeDetails(@PathVariable("id") String id){
        EmployeeDto employeeDto = EmployeeDtoMapper
                .employeeDtoMapper(employeeService.getEmployeeById(Long.parseLong(id)));

        return new ResponseEntity<>(employeeDto, HttpStatus.OK);
    }

    @PostMapping("/add-employee")
    public ResponseEntity<EmployeeDto> addEmployee(@RequestBody Employee employee){
        System.out.println(employee);
        EmployeeDto employeeDto = EmployeeDtoMapper
                .employeeDtoMapper(employeeService.addEmployee(employee));

        return new ResponseEntity<>(employeeDto, HttpStatus.CREATED);
    }

    @GetMapping("/get-salary-details/{id}")
    public ResponseEntity<Payment> getSalaryDetails(@PathVariable("id") String id){
        Payment payment = employeeService.getEmployeeById(Long.parseLong(id)).getPayment();

        return new ResponseEntity<>(payment, HttpStatus.OK);
    }

    @GetMapping("/get-benefits-details/{id}")
    public ResponseEntity<Benefits> getBenefitsDetails(@PathVariable("id") String id){
        Benefits benefits = employeeService.getEmployeeById(Long.parseLong(id)).getBenefits();

        return new ResponseEntity<>(benefits, HttpStatus.OK);
    }

    @GetMapping("/get-performance-details/{id}")
    public ResponseEntity<Performance> getPerformanceDetails(@PathVariable("id") String id){
        Performance performance = employeeService.getEmployeeById(Long.parseLong(id)).getPerformanceHistory();

        return new ResponseEntity<>(performance, HttpStatus.OK);
    }

}
