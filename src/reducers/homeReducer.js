import {ADD_LIST_DOGS} from "../constants/homeConstants";

export function homeReducer(state = {}, action) {
  switch (action.type) {
    case ADD_LIST_DOGS:
      return {...state, dogList: action.listDogs}
    default :
      return state;
  }
}