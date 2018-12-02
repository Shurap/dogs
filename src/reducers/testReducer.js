import {ADD_DOG} from "../constants/testConstants";

const initialState ={}

export function testReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_DOG:
      return {...state, dog: action.dog}
    default :
      return state;
  }
}