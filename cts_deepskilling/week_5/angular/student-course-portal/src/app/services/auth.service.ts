import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  // HO-7: Hardcoded for demo — replace with real JWT auth in production
  isLoggedIn = true;

  login(): void { this.isLoggedIn = true; }
  logout(): void { this.isLoggedIn = false; }
}
