import { HttpInterceptorFn } from '@angular/common/http';

// HO-8 Task 3: Auth interceptor - adds JWT token to every request
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const clonedReq = req.clone({
    setHeaders: {
      Authorization: 'Bearer mock-token-12345'
    }
  });
  return next(clonedReq);
};
