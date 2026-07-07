import { createAction, props } from '@ngrx/store';
import { Course } from '../../models/course.model';

// HO-9 Task 1: Action creators - [Course] prefix groups actions in DevTools
export const loadCourses = createAction('[Course] Load Courses');
export const loadCoursesSuccess = createAction('[Course] Load Courses Success', props<{ courses: Course[] }>());
export const loadCoursesFailure = createAction('[Course] Load Courses Failure', props<{ error: string }>());
