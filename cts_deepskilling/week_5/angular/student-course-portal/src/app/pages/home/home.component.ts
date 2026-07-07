import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CourseService } from '../../services/course.service';

// HO-1 Task 2: Stats row | HO-2 Tasks 1 & 2: Bindings + lifecycle hooks
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {
  // HO-2 Task 1: Property binding and event binding
  portalName = 'Student Course Portal';
  isPortalActive = true;
  message = '';
  searchTerm = '';
  coursesCount = 0;

  constructor(private courseService: CourseService) {}

  // HO-2 Task 2: ngOnInit lifecycle hook - fetch course count
  ngOnInit(): void {
    this.coursesCount = this.courseService.getCourses().length;
    console.log('HomeComponent initialised — courses loaded');
  }

  // HO-2 Task 2: ngOnDestroy lifecycle hook
  ngOnDestroy(): void {
    console.log('HomeComponent destroyed');
  }

  // HO-2 Task 1: Event binding handler
  onEnrollClick(): void {
    this.message = 'Enrollment opened!';
  }
}
