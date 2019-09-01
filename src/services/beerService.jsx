import {get} from "axios"
import {apiUrl} from "../config.json"

export const getBeers = queryString => {
  return get(`${apiUrl}?${queryString}`)
}
