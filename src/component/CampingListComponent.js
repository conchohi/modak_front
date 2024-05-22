import React, { useState, useEffect } from "react";
import SearchBar from "./CampingList/SearchBar";
import SideNav from "./CampingList/SideNav";
import TrendSlider from "./CampingList/TrendSlider"; // TrendSlider 컴포넌트 임포트
import ListCard from "./card/ListCard";
import { Link, useSearchParams } from "react-router-dom";
import PageComponent from "./common/PageComponent";
import useCustomMove from "../hooks/useCustomMove";
import SearchBar2 from "./input/SearchBar2";

function CampingListComponent(){
    const {page, size, refresh, region, type, moveToList} = useCustomMove();
    // useEffect를 사용하여 campings 상태 업데이트 로직을 추가 가능
    const [serverData, setServerData] = useState({ //pageResponseDto
      prev : false,
      next : true,
      pageNumList : [1,2,3,4,5],
      current : 1,
      nextPage : 6,
      prevPage : 0,
      dtoList : [
        {id : 1,type : "오토캠핑", name : "정선 라만차의 돈키호테 캠핑장", countLog : 40, location: "강원 정선군 화암면 그림바위길 1-23", 
        description : "왕산해수욕장에 둥지 튼 캠핑장", phone : "1588-3236", facilties : ["개수대", "샤워실","화장실","매점","와이파이"], imgList : []},
        {id : 2,type : "오토캠핑·펜션·글램핑", name : "꿈꾸는 시계 오토캠핑펜션", countLog : 9, location: "충남 논산시 벌곡면 수락로443번길 47-2", 
        description : "펜션과 캠핑장을 같이 운영중입니다", phone : "050-7976-4476", facilties : ["개수대", "샤워실","화장실","매점","와이파이", "바베큐장", "트램펄린", "수영장"], imgList : []},
        {id : 3,type : "오토캠핑·글램핑", name : "네이스트프라이빗 음성", countLog : 185, location: "충북 음성군 원남면 덕생로 167-15", 
        description : "감성 글램핑과 넓은 사이트, 깨끗한 시설!", phone : "1588-3236", facilties : ["개수대", "샤워실","화장실","와이파이"], imgList : []},
        {id : 4,type : "오토캠핑·글램핑", name : "개네집캠핑장", countLog : 95, location: "경기 양주시 장흥면 권율로 156-116", 
        description : "반려견과 함께하는 즐거운 캠핑장", phone : "010-2328-1067", facilties : ["개수대", "샤워실","화장실","매점","와이파이","반려동물","물놀이","등산"], imgList : []},
        {id : 5,type : "오토캠핑·글램핑", name : "별빛하늘캠핑", countLog : 12, location: "충남 서천군 비인면 갯벌체험로 805", 
        description : "갯벌 체험과 캠핑을 한번에!", phone : "050-7135-1914", facilties : ["개수대", "샤워실","화장실","매점","와이파이","바베큐장","장비대여", "갯벌"], imgList : []}
      ]
    })
    

  
    useEffect(()=>{
    //리스트 불러오기
      console.log(region)
      console.log(page)
      console.log(size)
      console.log(type)
      //이걸로 get요청하면 serverData 넘어옴
      //setServerData();
    }, [region,page,size,type,refresh])
  
  
    return(
        <div className="flex flex-col flex-wrap md:flex-row">
          <div className="w-full flex flex-col justify-center mb-10">
            <div className="w-3/5 mx-auto mb-5">
              <SearchBar/>
            </div>
            <TrendSlider/> {/* TrendSlider 컴포넌트 배치 */}
          {/* 그 외 필요한 요소들 */}
          </div>
          <div className="w-full flex flex-col md:flex-row mb-10">
            <div className="w-full md:w-1/5 me-3 flex justify-center">
              <SideNav/>
            </div>
            <div className="w-full md:w-4/5">
              {serverData.dtoList.map(dto=>{
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

export default CampingListComponent