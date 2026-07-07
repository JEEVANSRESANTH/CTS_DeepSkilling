import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

// HO-7 Task 2: CanActivate guard - protects /profile and /enroll
export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn) {
    return true;
  }
  // Redirect to home if not authenticated
  router.navigate(['/']);
  return false;
};
