import axios from "axios"

export const API_SERVER_HOST = 'http://localhost:4040'

const prefix = `${API_SERVER_HOST}/api/camp`

export const getCamp = async (campNo) => {
  const response = await axios.get(`${prefix}/${campNo}` )

  return response.data

}

// 리스트---
export const getListByRegion = async ( pageParam ) => {

  const {page,size, type, region, searchTerm} = pageParam

  const response = await axios.get(`${prefix}/listByRegion`, {params: {page:page,size:size, type:type, region:region, searchTerm:searchTerm }})
  
  return response.data

}
// 리스트
export const getListByWeather = async ( pageParam ) => {

    const {page,size, type, searchTerm, weather, date} = pageParam
  
    const response = await axios.get(`${prefix}/listByWeather`, {params: {page:page,size:size, type:type, searchTerm:searchTerm, weather:weather, date:date }})
    
    return response.data
  
  }

  export const getBest4 = async ( date ) => {
    const response = await axios.get(`${prefix}/best`, {params : {date : date}})
    return response.data
  }

  export const getBest4ByRegion = async ( region ) => {
  
    const response = await axios.get(`${prefix}/best-region`, {params: {region:region }})
    
    return response.data
  
  }