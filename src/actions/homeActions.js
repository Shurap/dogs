import {ADD_LIST_DOGS} from '../constants/homeConstants'
import {ADD_ONE_DOG} from '../constants/homeConstants'

export function addListDogs(dogList){
  return {
    type : ADD_LIST_DOGS,
    dogList
  }
}

export function addDog(dogImageUrl){
  return {
    type : ADD_ONE_DOG,
    dogImageUrl
  }
}