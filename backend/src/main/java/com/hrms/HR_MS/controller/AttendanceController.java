package com.hrms.HR_MS.controller;


import com.hrms.HR_MS.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.hrms.HR_MS.entity.pojo.Attendance;

@RestController
@RequiredArgsConstructor
@RequestMapping("/attendance")
public class AttendanceController {

    @Autowired
    private final EmployeeService employeeService;

    @GetMapping("/get-attendance/{id}")
    public ResponseEntity<Attendance> getAttendance(@PathVariable("id") String employeeId){
        Attendance attendance = employeeService.getAttendance(Long.parseLong(employeeId));
        return new ResponseEntity<Attendance>(attendance, HttpStatus.OK);
    }

    @PutMapping("/update-attendance/{id}")
    public ResponseEntity<Attendance> updateAttendance(@RequestBody Attendance attendance,
                                                    @PathVariable("id") String id){
        Attendance updatedAttendance = employeeService.updateAttendance(attendance, Long.parseLong(id));

        return new ResponseEntity<>(updatedAttendance, HttpStatus.ACCEPTED);
    }
}

