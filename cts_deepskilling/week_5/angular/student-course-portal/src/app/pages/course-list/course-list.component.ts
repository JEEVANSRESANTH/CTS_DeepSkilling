import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Course } from '../../models/course.model';
import { CourseCardComponent } from '../../components/course-card/course-card.component';
import { loadCourses } from '../../store/course/course.actions';
import { selectAllCourses, selectCoursesLoading } from '../../store/course/course.selectors';

// HO-3 Task 1: *ngIf, *ngFor, trackBy | HO-9: NgRx store integration
@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [NgIf, NgFor, AsyncPipe, CourseCardComponent],
  templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {
  // HO-9 Task 1: Observable from NgRx store (rendered via async pipe)
  courses$: Observable<Course[]>;
  loading$: Observable<boolean>;
  selectedCourseId: number | null = null;

  constructor(private store: Store, private router: Router) {
    this.courses$ = this.store.select(selectAllCourses);
    this.loading$ = this.store.select(selectCoursesLoading);
  }

  ngOnInit(): void {
    // HO-9 Task 1: Dispatch action instead of calling service directly
    this.store.dispatch(loadCourses());
  }

  // HO-3 Task 1: trackBy for performance - avoids re-rendering unchanged items
  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }

  onEnroll(courseId: number): void {
    console.log('Enrolling in course:', courseId);
    this.selectedCourseId = courseId;
  }

  onCardClick(courseId: number): void {
    // HO-7 Task 1: Navigate to course detail
    this.router.navigate(['courses', courseId]);
  }
}
