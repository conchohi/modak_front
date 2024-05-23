import axios from "axios"
import { API_SERVER_HOST } from "./campApi"

const prefix = `${API_SERVER_HOST}/api/user`

export const getUserData = async () => {
    const token = localStorage.getItem('access');

  const response = await axios.get(`${prefix}`,{headers:
    {access: token}
  } )

  return response.data

}
