import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

/**
* Creates an action to select a course
* @param {number} index - The index of the course to select
* @returns {Object} Action object with type and course index
*/
export const selectCourse = (index) => ({
 type: SELECT_COURSE,
 index,
});

/**
* Creates an action to unselect a course
* @param {number} index - The index of the course to unselect
* @returns {Object} Action object with type and course index
*/
export const unSelectCourse = (index) => ({
 type: UNSELECT_COURSE,
 index,
});
