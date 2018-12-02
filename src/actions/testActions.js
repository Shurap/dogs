import {ADD_DOG} from '../constants/testConstants'


export function addDog(dog){
  return {
    type: ADD_DOG,
    dog
  }
}
