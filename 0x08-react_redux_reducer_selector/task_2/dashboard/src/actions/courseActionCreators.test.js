import { selectCourse, unSelectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

describe('Course Action Creators', () => {
 describe('selectCourse', () => {
   it('returns the correct action object when called', () => {
     const courseIndex = 1;
     const expectedAction = {
       type: SELECT_COURSE,
       index: courseIndex
     };

     expect(selectCourse(courseIndex)).toEqual(expectedAction);
   });
 });

 describe('unSelectCourse', () => {
   it('returns the correct action object when called', () => {
     const courseIndex = 1;
     const expectedAction = {
       type: UNSELECT_COURSE,
       index: courseIndex
     };

     expect(unSelectCourse(courseIndex)).toEqual(expectedAction);
   });
 });
});
