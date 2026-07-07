import { CanDeactivateFn } from '@angular/router';
import { ReactiveEnrollmentFormComponent } from '../pages/reactive-enrollment-form/reactive-enrollment-form.component';

// HO-7 Task 2: CanDeactivate - warns user if reactive form has unsaved changes
export const unsavedChangesGuard: CanDeactivateFn<ReactiveEnrollmentFormComponent> =
  (component) => {
    if (component.enrollForm?.dirty) {
      return window.confirm('You have unsaved changes. Are you sure you want to leave?');
    }
    return true;
  };
