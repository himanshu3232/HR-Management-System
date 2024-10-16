package com.hrms.HR_MS.entity.pojo;

import jakarta.persistence.Embeddable;
import org.springframework.stereotype.Component;

@Embeddable
public record Performance (String goal, String review, String plans){
}
