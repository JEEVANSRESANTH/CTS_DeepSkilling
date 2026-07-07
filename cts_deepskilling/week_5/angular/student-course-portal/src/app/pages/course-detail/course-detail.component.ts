import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';

// HO-7 Task 1: Route parameters
@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [NgIf],
  template: `
    <div class="container">
      <div *ngIf="course" class="card">
        <h2>{{ course.name }}</h2>
        <p><strong>Code:</strong> {{ course.code }}</p>
        <p><strong>Credits:</strong> {{ course.credits }}</p>
        <p><strong>Status:</strong> {{ course.gradeStatus }}</p>
      </div>
      <p *ngIf="!course">Course not found for ID: {{ courseId }}</p>
    </div>
  `
})
export class CourseDetailComponent implements OnInit {
  course: Course | undefined;
  courseId: number = 0;

  constructor(private route: ActivatedRoute, private courseService: CourseService) {}

  ngOnInit(): void {
    // HO-7 Task 1: Read :id route parameter
    this.courseId = Number(this.route.snapshot.paramMap.get('id'));
    this.course = this.courseService.getCourseById(this.courseId);
  }
}
