package com.hrms.HR_MS.repository;

import com.hrms.HR_MS.entity.Employee;
import org.springframework.data.repository.CrudRepository;

public interface EmployeeRepository extends CrudRepository<Employee, Long> {
}
