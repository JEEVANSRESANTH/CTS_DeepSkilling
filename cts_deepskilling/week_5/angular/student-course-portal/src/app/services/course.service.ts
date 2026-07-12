import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, tap, retry } from 'rxjs/operators';
import { Course } from '../models/course.model';

@Injectable({ providedIn: 'root' })
export class CourseService {
  private apiUrl = 'http://localhost:3000/courses';

  private courses: Course[] = [
    { id: 1, name: 'Data Structures', code: 'CS101', credits: 4, gradeStatus: 'passed' },
    { id: 2, name: 'Algorithms', code: 'CS102', credits: 3, gradeStatus: 'failed' },
    { id: 3, name: 'Database Systems', code: 'CS201', credits: 4, gradeStatus: 'pending' },
    { id: 4, name: 'Operating Systems', code: 'CS301', credits: 3, gradeStatus: 'passed' },
    { id: 5, name: 'Computer Networks', code: 'CS401', credits: 4, gradeStatus: 'pending' }
  ];

  constructor(private http: HttpClient) {}

  getCourses(): Course[] { return this.courses; }
  getCourseById(id: number): Course | undefined { return this.courses.find(c => c.id === id); }
  addCourse(course: Course): void { this.courses.push(course); }

  getCourses$(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl).pipe(
      tap(courses => console.log('Courses loaded from API:', courses.length)),
      map(courses => courses.filter(c => c.credits > 0)),
      retry(2),
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
