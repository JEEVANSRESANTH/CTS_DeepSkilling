import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { LoadingService } from '../services/loading.service';

// HO-8 Task 3: Loading interceptor - sets isLoading before/after every HTTP call
export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);
  loadingService.setLoading(true);

  return next(req).pipe(
    // HO-8: finalize runs on complete OR error - correct place to hide spinner
    finalize(() => loadingService.setLoading(false))
  );
};
