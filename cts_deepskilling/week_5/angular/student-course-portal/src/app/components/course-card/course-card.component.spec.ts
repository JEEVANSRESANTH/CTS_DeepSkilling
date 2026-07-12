import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SimpleChange } from '@angular/core';
import { CourseCardComponent } from './course-card.component';
import { EnrollmentService } from '../../services/enrollment.service';
import { CourseService } from '../../services/course.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

const mockCourse = { id: 1, name: 'Data Structures', code: 'CS101', credits: 4, gradeStatus: 'passed' as const };

describe('CourseCardComponent', () => {
  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCardComponent, HttpClientTestingModule],
      providers: [EnrollmentService, CourseService]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display course name from @Input', () => {
    component.course = mockCourse;
    fixture.detectChanges();
    const heading = fixture.debugElement.query(By.css('h3')).nativeElement;
    expect(heading.textContent).toContain('Data Structures');
  });

  it('should emit enrollRequested with course id when Enroll button clicked', () => {
    component.course = mockCourse;
    fixture.detectChanges();
    spyOn(component.enrollRequested, 'emit');
    const button = fixture.debugElement.query(By.css('.btn-primary')).nativeElement;
    button.click();
    fixture.detectChanges();
    expect(component.enrollRequested.emit).toHaveBeenCalledWith(1);
  });

  it('should log on ngOnChanges when course input changes', () => {
    spyOn(console, 'log');
    component.ngOnChanges({
      course: new SimpleChange(null, mockCourse, true)
    });
    expect(console.log).toHaveBeenCalled();
  });

  it('should show Passed badge for passed grade status', () => {
    component.course = mockCourse;
    fixture.detectChanges();
    const badge = fixture.debugElement.query(By.css('.badge-passed'));
    expect(badge).toBeTruthy();
    expect(badge.nativeElement.textContent).toContain('Passed');
  });
});
