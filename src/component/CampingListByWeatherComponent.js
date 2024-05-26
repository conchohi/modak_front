import React, { useState, useEffect } from "react";
import SearchBar from "./CampingList/SearchBar";
import ListCard from "./card/ListCard";
import PageComponent from "./common/PageComponent";
import { getListByWeather } from "api/campApi";
import useCustomMoveByWeather from "hooks/useCustomMoveByWeather";
import SideNavByWeather from "./CampingList/SideNavByWeather";
import SearchBarByWeather from "./CampingList/SearchBarByWeather";

function CampingListByWeatherComponent(){
    const {page, size, refresh, searchTerm, weather, date,type, moveToList} = useCustomMoveByWeather();
    // useEffect를 사용하여 campings 상태 업데이트 로직을 추가 가능
    const [serverData, setServerData] = useState({ //pageResponseDto
      "data": {
        "dtoList": [
            
        ],
        "pageNumList": [

        ],
        "pageRequestDTO": {
            "page": 1,
            "size": 5,
            "type": null,
            "region": null,
            "searchTerm": null,
            "weather": null,
            "date": null
        },
        "prev": false,
        "next": true,
        "totalCount": 3826,
        "prevPage": 0,
        "nextPage": 6,
        "totalPage": 5,
        "current": 1
    }
    })
    
    useEffect(()=>{
      getListByWeather({page:page, size:size, searchTerm:searchTerm, date:date, weather:weather, type:type}).then(result=>{
        setServerData(result);
      })
    }, [])
  
    useEffect(()=>{
    //리스트 불러오기
      getListByWeather({page:page,size:size,searchTerm:searchTerm, date:date, weather:weather, type:type})
      .then(result=>{
        setServerData(result);
    })

    }, [page,size,refresh,searchTerm, date, type,weather])
  
  
    return(
        <div className="flex flex-col flex-wrap md:flex-row">
          <div className="w-full flex flex-col justify-center mb-5">
            <div className="w-3/5 mx-auto">
              <SearchBarByWeather/>
            </div>
          {/* 그 외 필요한 요소들 */}
          </div>
          <div className="w-full flex flex-col md:flex-row mb-10">
            <div className="w-full md:w-1/5 me-3 flex justify-center">
              <SideNavByWeather/>
            </div>
            <div className="w-full md:w-4/5">
              {serverData.data.dtoList.map(dto=>{
                return (
                  <>
                    <ListCard camp={dto}/>
                  </>
                )
              })}

            </div>
          </div>
          <div className="flex justify-center w-full">
            {/* 페이징처리 */}
            <PageComponent serverData={serverData} moveToList={moveToList}/>
          </div>
        </div>
    )
}

export default CampingListByWeatherComponent