import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, tap, retry } from 'rxjs/operators';
import { Course } from '../models/course.model';

// HO-6: providedIn root = singleton shared across entire app
@Injectable({ providedIn: 'root' })
export class CourseService {
  private apiUrl = 'http://localhost:3000/courses';

  // HO-6: In-memory fallback data (used before HTTP integration in HO-8)
  private courses: Course[] = [
    { id: 1, name: 'Data Structures', code: 'CS101', credits: 4, gradeStatus: 'passed' },
    { id: 2, name: 'Algorithms', code: 'CS102', credits: 3, gradeStatus: 'failed' },
    { id: 3, name: 'Database Systems', code: 'CS201', credits: 4, gradeStatus: 'pending' },
    { id: 4, name: 'Operating Systems', code: 'CS301', credits: 3, gradeStatus: 'passed' },
    { id: 5, name: 'Computer Networks', code: 'CS401', credits: 4, gradeStatus: 'pending' }
  ];

  constructor(private http: HttpClient) {}

  // HO-6: Synchronous access (fallback for pre-HTTP exercises)
  getCourses(): Course[] { return this.courses; }
  getCourseById(id: number): Course | undefined { return this.courses.find(c => c.id === id); }
  addCourse(course: Course): void { this.courses.push(course); }

  // HO-8: HTTP methods with RxJS operators
  getCourses$(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl).pipe(
      // HO-8 Task 2: tap for side effects (no data mutation here)
      tap(courses => console.log('Courses loaded from API:', courses.length)),
      // HO-8 Task 2: filter invalid data
      map(courses => courses.filter(c => c.credits > 0)),
      // HO-8 Task 2: retry on failure
      retry(2),
      // HO-8 Task 2: catchError for graceful error handling
      catchError(err => {
        console.error('Failed to load courses:', err);
        return throwError(() => new Error('Failed to load courses. Please try again.'));
      })
    );
  }

  getCourseById$(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/${id}`).pipe(
      catchError(err => throwError(() => new Error(`Course ${id} not found`)))
    );
  }

  createCourse(course: Omit<Course, 'id'>): Observable<Course> {
    return this.http.post<Course>(this.apiUrl, course);
  }

  updateCourse(id: number, course: Partial<Course>): Observable<Course> {
    return this.http.put<Course>(`${this.apiUrl}/${id}`, course);
  }

  deleteCourse(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
