import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CourseService } from './course.service';
import { Course } from '../models/course.model';

const mockCourses: Course[] = [
  { id: 1, name: 'Data Structures', code: 'CS101', credits: 4, gradeStatus: 'passed' },
  { id: 2, name: 'Algorithms', code: 'CS102', credits: 3, gradeStatus: 'failed' }
];

describe('CourseService', () => {
  let service: CourseService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    // HO-10 Task 2: HttpClientTestingModule replaces real HTTP
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CourseService]
    });
    service = TestBed.inject(CourseService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  // HO-10 Task 2: Verify no outstanding requests after each test
  afterEach(() => httpMock.verify());

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // HO-10 Task 2: HTTP GET test
  it('should GET courses from API', () => {
    service.getCourses$().subscribe(courses => {
      expect(courses.length).toBe(2);
      expect(courses[0].name).toBe('Data Structures');
    });

    // HO-10 Task 2: flush mock response to the pending request
    const req = httpMock.expectOne('http://localhost:3000/courses');
    expect(req.request.method).toBe('GET');
    req.flush(mockCourses);
  });

  // HO-10 Task 2: Error handling test
  it('should handle 500 error gracefully', () => {
    service.getCourses$().subscribe({
      error: err => expect(err.message).toContain('Failed to load courses')
    });

    const req = httpMock.expectOne('http://localhost:3000/courses');
    req.flush('Server Error', { status: 500, statusText: 'Internal Server Error' });
  });
});
