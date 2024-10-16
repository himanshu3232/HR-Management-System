package com.hrms.HR_MS.entity.pojo;

import jakarta.persistence.Embeddable;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Embeddable
public record Attendance(LocalDateTime entryTime, LocalDateTime exitTime, Integer vacation, Integer sickLeave, Integer personalLeave) {
}

