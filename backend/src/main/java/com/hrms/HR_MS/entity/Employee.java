package com.hrms.HR_MS.entity;

import com.hrms.HR_MS.entity.pojo.Attendance;
import com.hrms.HR_MS.entity.pojo.Benefits;
import com.hrms.HR_MS.entity.pojo.Payment;
import com.hrms.HR_MS.entity.pojo.Performance;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String contact;
    private String role;
    private String salary;
    @Embedded
    private Performance performanceHistory;
    @Embedded
    private Benefits benefits;
    @Embedded
    private Payment payment;
    @Embedded
    private Attendance attendance;
}


