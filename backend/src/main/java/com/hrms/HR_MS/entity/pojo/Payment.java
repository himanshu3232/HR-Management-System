package com.hrms.HR_MS.entity.pojo;

import jakarta.persistence.Embeddable;
import org.springframework.stereotype.Component;

@Embeddable
public record Payment(String hourlyRates, String fixedSalary, String commission, String tax, String salaryStatement) {
}

