import { courseReducer } from './courseReducer';
import {
  fetchCourseSuccess,
  selectCourse,
  unSelectCourse,
} from '../actions/courseActionCreators';

describe('courseReducer', () => {
  const initialCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ];

  describe('default behavior', () => {
    it('should return an empty array for unknown action', () => {
      expect(courseReducer([], { type: 'UNKNOWN_ACTION' })).toEqual([]);
    });
  });

  describe('FETCH_COURSE_SUCCESS', () => {
    it('should add isSelected: false to each course', () => {
      const expectedState = initialCourses.map(course => ({
        ...course,
        isSelected: false,
      }));

      expect(courseReducer([], fetchCourseSuccess(initialCourses))).toEqual(expectedState);
    });
  });

  describe('SELECT_COURSE', () => {
    it('should mark the specified course as selected', () => {
      const initialState = initialCourses.map(course => ({
        ...course,
        isSelected: false,
      }));

      const expectedState = initialCourses.map(course => ({
        ...course,
        isSelected: course.id === 2,
      }));

      expect(courseReducer(initialState, selectCourse(2))).toEqual(expectedState);
    });
  });

  describe('UNSELECT_COURSE', () => {
    it('should mark the specified course as unselected', () => {
      const initialState = initialCourses.map(course => ({
        ...course,
        isSelected: course.id === 2,
      }));

      const expectedState = initialCourses.map(course => ({
        ...course,
        isSelected: false,
      }));

      expect(courseReducer(initialState, unSelectCourse(2))).toEqual(expectedState);
    });
  });
});
