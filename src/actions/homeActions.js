import {ADD_LIST_DOGS} from '../constants/homeConstants'
import {ADD_ONE_DOG} from '../constants/homeConstants'

export function addListDogs(listDogs){
  return {
    type : ADD_LIST_DOGS,
    listDogs
  }
}

export function addDog(dogImageUrl){
  return {
    type : ADD_ONE_DOG,
    dogImageUrl
  }
}