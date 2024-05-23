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
const useCustomMove = () => {

  const navigate = useNavigate()

  const [refresh, setRefresh] = useState(false)  

  const [queryParams] = useSearchParams()

  const page = getNum(queryParams.get('page'), 1)
  const size = getNum(queryParams.get('size'), 5)
  const region = getString(queryParams.get('region'))
  const type = getString(queryParams.get('type'))
  const searchTerm = getString(queryParams.get('searchTerm'))

  const queryDefault = createSearchParams({page, size, region, type, searchTerm}).toString() 

  const moveToList = (pageParam) => {

    let queryStr = ""

    if(pageParam){
      const pageNum = getNum(pageParam.page, 1)
      const sizeNum = getNum(pageParam.size, 5)
      queryStr = createSearchParams({page:pageNum, size: sizeNum, region : pageParam.region, type: pageParam.type, searchTerm:pageParam.searchTerm}).toString()
    }else {
      queryStr = queryDefault
    }

    navigate({
      pathname: `../camp/list`,
      search:queryStr
    })

    setRefresh(!refresh) //추가 
  }


  return  {moveToList, page, size, region, refresh, type, searchTerm}
}

export default useCustomMove
