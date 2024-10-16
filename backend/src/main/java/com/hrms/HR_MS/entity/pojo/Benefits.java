package com.hrms.HR_MS.entity.pojo;

import jakarta.persistence.Embeddable;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Embeddable
public record Benefits(String healthInsurance, String retirementPlans, String cost) {
}


