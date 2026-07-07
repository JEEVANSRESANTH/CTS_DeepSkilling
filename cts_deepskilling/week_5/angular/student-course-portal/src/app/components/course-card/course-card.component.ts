import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { NgClass, NgStyle, NgSwitch, NgSwitchCase, NgIf } from '@angular/common';
import { Course } from '../../models/course.model';
import { EnrollmentService } from '../../services/enrollment.service';
import { HighlightDirective } from '../../directives/highlight.directive';
import { CreditLabelPipe } from '../../pipes/credit-label.pipe';

// HO-2 Task 3: @Input/@Output | HO-3: ngClass, ngStyle, ngSwitch
@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [NgClass, NgStyle, NgSwitch, NgSwitchCase, NgIf, HighlightDirective, CreditLabelPipe],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements OnChanges {
  // HO-2 Task 3: @Input for data from parent
  @Input() course!: Course;

  // HO-2 Task 3: @Output for events to parent
  @Output() enrollRequested = new EventEmitter<number>();

  isExpanded = false;

  constructor(public enrollmentService: EnrollmentService) {}

  // HO-2 Task 2: ngOnChanges - logs when input changes
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['course']) {
      console.log('ngOnChanges - previous:', changes['course'].previousValue,
                  '| current:', changes['course'].currentValue);
    }
  }

  // HO-3 Task 2: Getter keeps template clean (no inline logic)
  get cardClasses(): Record<string, boolean> {
    return {
      'card': true,
      'card--enrolled': this.enrollmentService.isEnrolled(this.course?.id),
      'card--full': this.course?.credits >= 4,
      'expanded': this.isExpanded
    };
  }

  onEnrollClick(): void {
    if (this.enrollmentService.isEnrolled(this.course.id)) {
      this.enrollmentService.unenroll(this.course.id);
    } else {
      this.enrollmentService.enroll(this.course.id);
      this.enrollRequested.emit(this.course.id);
    }
  }
}
