import {ADD_LIST_DOGS} from "../constants/homeConstants";
import {ADD_ONE_DOG} from "../constants/homeConstants";

export function homeReducer(state = {}, action) {
  switch (action.type) {
    case ADD_LIST_DOGS:
      return {...state, dogList: action.dogList}
    case ADD_ONE_DOG:
      return {...state, dogImageUrl: action.dogImageUrl}
    default :
      return state;
  }
}