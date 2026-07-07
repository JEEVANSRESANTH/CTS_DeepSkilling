import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray,
         Validators, AbstractControl, ValidationErrors, FormControl } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';

// HO-5: Custom synchronous validator
function noCourseCode(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  if (typeof value === 'string' && value.startsWith('XX')) {
    return { noCourseCode: true };
  }
  return null;
}

// HO-5: Custom async validator (simulates backend email check)
function simulateEmailCheck(control: AbstractControl): Promise<ValidationErrors | null> {
  return new Promise(resolve => {
    setTimeout(() => {
      if (control.value?.includes('test@')) {
        resolve({ emailTaken: true });
      } else {
        resolve(null);
      }
    }, 800);
  });
}

// HO-5: Reactive form with FormBuilder, FormArray, custom validators
@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './reactive-enrollment-form.component.html'
})
export class ReactiveEnrollmentFormComponent implements OnInit {
  enrollForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // HO-5 Task 1: Build reactive form with FormBuilder
    this.enrollForm = this.fb.group({
      studentName: ['', [Validators.required, Validators.minLength(3)]],
      // HO-5 Task 2: Async validator as third argument
      studentEmail: ['', [Validators.required, Validators.email], [simulateEmailCheck]],
      // HO-5 Task 2: Custom sync validator alongside required
      courseId: ['', [Validators.required, noCourseCode]],
      preferredSemester: ['Odd', Validators.required],
      agreeToTerms: [false, Validators.requiredTrue],
      // HO-5 Task 2: FormArray for dynamic controls
      additionalCourses: this.fb.array([])
    });
  }

  // HO-5 Task 2: Typed getter — avoids unsafe casting in template
  get additionalCourses(): FormArray {
    return this.enrollForm.get('additionalCourses') as FormArray;
  }

  addCourse(): void {
    this.additionalCourses.push(new FormControl('', Validators.required));
  }

  removeCourse(index: number): void {
    this.additionalCourses.removeAt(index);
  }

  onSubmit(): void {
    // HO-5 Task 1: value excludes disabled controls; getRawValue includes all
    console.log('Form value:', this.enrollForm.value);
    console.log('Raw value:', this.enrollForm.getRawValue());
    if (this.enrollForm.valid) {
      this.submitted = true;
    }
  }
}
