import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// HO-8 Task 3: BehaviorSubject for global loading state
@Injectable({ providedIn: 'root' })
export class LoadingService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  isLoading$ = this.loadingSubject.asObservable();

  setLoading(state: boolean): void {
    this.loadingSubject.next(state);
  }
}
