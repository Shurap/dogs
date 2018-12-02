import {ADD_LIST_DOGS} from '../constants/homeConstants'

export function addListDogs(listDogs){
  return {
    type : ADD_LIST_DOGS,
    listDogs
  }

}