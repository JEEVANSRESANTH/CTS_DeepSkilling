import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { EnrollmentService } from '../../services/enrollment.service';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [NgFor, NgIf],
  template: `
    <div class="container">
      <h2>Student Profile</h2>
      <div class="card" style="margin-top:1rem">
        <h3>Enrolled Courses</h3>
        <p *ngIf="enrolledCourses.length === 0" style="color:#999">Not enrolled in any courses yet.</p>
        <div *ngFor="let course of enrolledCourses" style="padding:0.5rem 0; border-bottom:1px solid #eee">
          <strong>{{ course.name }}</strong> — {{ course.code }} ({{ course.credits }} credits)
        </div>
      </div>
    </div>
  `
})
export class StudentProfileComponent implements OnInit {
  enrolledCourses: Course[] = [];

  constructor(private enrollmentService: EnrollmentService) {}

  ngOnInit(): void {
    this.enrolledCourses = this.enrollmentService.getEnrolledCourses();
  }
}
