import axios from "axios"
import { API_SERVER_HOST } from "./campApi"

const prefix = `${API_SERVER_HOST}/api/weather`

export const getCurrentWeather = async (region) => {
  const response = await axios.get(`${prefix}/now`,{params:{region : region}} )

  return response.data

}
export const getWeeklyWeather = async (region) => {
    const response = await axios.get(`${prefix}/week`,{params:{region : region}} )
  
    return response.data
  
  }

  export const getAllWeather = async (date) => {
    const response = await axios.get(`${prefix}/all`,{params:{date : date}} )
  
    return response.data
  
  }