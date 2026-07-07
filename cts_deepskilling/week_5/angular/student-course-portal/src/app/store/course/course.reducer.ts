import { createReducer, on } from '@ngrx/store';
import { Course } from '../../models/course.model';
import { loadCourses, loadCoursesSuccess, loadCoursesFailure } from './course.actions';

// HO-9 Task 1: State interface
export interface CourseState {
  courses: Course[];
  loading: boolean;
  error: string | null;
}

const initialState: CourseState = {
  courses: [],
  loading: false,
  error: null
};

// HO-9 Task 1: Pure reducer function - reducers must never mutate state
export const courseReducer = createReducer(
  initialState,
  on(loadCourses, state => ({ ...state, loading: true, error: null })),
  on(loadCoursesSuccess, (state, { courses }) => ({ ...state, loading: false, courses })),
  on(loadCoursesFailure, (state, { error }) => ({ ...state, loading: false, error }))
);
