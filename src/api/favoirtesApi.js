import axios from "axios";
import { API_SERVER_HOST } from "./campApi"

const prefix = `${API_SERVER_HOST}/favorites`

export const isLike = async (campNo) => {
    const token = localStorage.getItem('access');

  const response = await axios.get(`${prefix}/${campNo}`,{
    headers: {
        access: token
    }
  })
  return response.data

}

export const clickLikeApi = async ( campNo ) => {
    const token = localStorage.getItem('access');

    const response = await axios.post(`${prefix}/${campNo}`,{
      headers: {
          access: token
      }
    })
    return response.data

}

export const clickUnLikeApi = async ( campNo ) => {

    const token = localStorage.getItem('access');

  const response = await axios.delete(`${prefix}/${campNo}`,{
    headers: {
        access: token
    }
  })
  return response.data
  
  }