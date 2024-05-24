import { useState } from "react"
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom"

const getNum  = (param, defaultValue) => {

  if(!param){
    return defaultValue
  }

  return parseInt(param)
}

const getString = (param) =>{
  return param ? param : "";
}
const getCurrentDate = () =>{
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 1을 더함
        const day = String(currentDate.getDate()).padStart(2, '0');
        const date = `${year}-${month}-${day}`;
        return date
}
const useCustomMoveByWeather = () => {

  const navigate = useNavigate()

  const [refresh, setRefresh] = useState(false)  

  const [queryParams] = useSearchParams()

  const page = getNum(queryParams.get('page'), 1)
  const size = getNum(queryParams.get('size'), 5)
  const date = queryParams.get('date') ? queryParams.get('date') : getCurrentDate();
  const weather = getString(queryParams.get('weather'))
  const type = getString(queryParams.get('type'))
  const searchTerm = getString(queryParams.get('searchTerm'))

  const queryDefault = createSearchParams({page, size, date,weather, searchTerm, type}).toString() 

  const moveToList = (pageParam) => {

    let queryStr = ""

    if(pageParam){
      const pageNum = getNum(pageParam.page, 1)
      const sizeNum = getNum(pageParam.size, 5)
      queryStr = createSearchParams({page:pageNum, size: sizeNum, type:pageParam.type, date:pageParam.date, weather: pageParam.weather, searchTerm:pageParam.searchTerm}).toString()
    }else {
      queryStr = queryDefault
    }

    navigate({
      pathname: `../camp/listByWeather`,
      search:queryStr
    })

    setRefresh(!refresh) //추가 
  }


  return  {moveToList, page, size, refresh, date, weather, type, searchTerm}
}

export default useCustomMoveByWeather
