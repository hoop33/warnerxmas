/* @flow */

const initialState = {
  siblings: [
    'Ben',
    'Rob',
    'Rachel',
    'Emily',
    'Sarah',
    'Matt',
    'Laura'
  ],
  referenceYear: 2014, // a year when the offset is 1 (when each sibling gives to the next sibling on the list)
  year: new Date().getFullYear()
};

export default function scheduleReducer (state: Object = initialState, action: Action): Object {
  return state;
}
