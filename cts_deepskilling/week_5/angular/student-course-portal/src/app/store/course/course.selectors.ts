import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CourseState } from './course.reducer';

// HO-9 Task 1: Selectors are memoised - only recompute when input changes
const selectCourseState = createFeatureSelector<CourseState>('course');

export const selectAllCourses = createSelector(selectCourseState, state => state.courses);
export const selectCoursesLoading = createSelector(selectCourseState, state => state.loading);
export const selectCoursesError = createSelector(selectCourseState, state => state.error);
