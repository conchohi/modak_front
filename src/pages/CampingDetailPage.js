
import { Link, useNavigate, useParams } from "react-router-dom";
import BasicLayout from "../layouts/BasicLayout";
import SlideImage from "../component/slide/SlideImage";
import { useEffect, useState } from "react";
import WeatherToday from "../component/weather/WeatherToday";
import WeatherWeek from "../component/weather/WeatherWeek";
import { StaticMap } from "react-kakao-maps-sdk";
import { IoIosCall } from "react-icons/io";
import { FaMapMarkerAlt, FaSink, FaWifi, FaShower, FaRestroom, FaStore } from "react-icons/fa";

function CampingDetailPage() {
  const {campNo} = useParams();
  const [campData,setCampData] = useState({
    name:"정선 라만차의 돈키호테 캠핑장",
    location : "강원 정선군 화암면 그림바위길 1-23",
    description : "왕산해수욕장에 둥지 튼 캠핌장",
    site : "https://blog.naver.com/lamanchadq",
    lat : 37.3452522,
    lon : 128.7893662,
    facility : ["개수대", "샤워실","화장실","매점","와이파이"],
    region : "강원도",
    phone : "010-5370-5830",
    type : "오토캠핑"
  });

  useEffect(()=>{
    //get 요청으로 캠프데이터 받아옴 
    //setCampData()
  }, [campNo])
  
  const navigate = useNavigate();


  return (
    <> 
      <BasicLayout>
          <div className="w-full h-full flex flex-col justify-center items-center space-y-4 border-2 border-gray-200">
            <div className="text-3xl font-bold text-center py-5">캠핑장 상세 보기</div>
            <div className="w-2/3 mx-auto ">
              <SlideImage images={["https://gocamping.or.kr/upload/camp/6975/thumb/thumb_720_8864VHhvenUMGtZByAoSmY82.jpg",
                        "https://gocamping.or.kr/upload/camp/6975/thumb/thumb_384_2055aGAnSDO4enwcMgIkbTcd.jpg",
                        "https://gocamping.or.kr/upload/camp/6975/thumb/thumb_384_0318U5bxHC7v1A6uGspxBZCL.jpg",
                        "https://gocamping.or.kr/upload/camp/6975/thumb/thumb_384_3294uw8AApzwjTyKx0LIWAce.jpg"
              ]}/>
              <div className="w-full my-10 relative">
                {/* 캠핑장 이름과 홈페이지 이동 버튼 */}
                <div className="flex justify-between mt-3">
                    <div className="w-full space-y-4">
                        <p className="text-sm text-gray-700">{campData.type}</p>
                        <p className="text-2xl font-semibold flex gap-2 items-center">{campData.name}</p>
                        <p className="flex gap-2 items-center "><FaMapMarkerAlt color="#2291F2"/> {campData.location}</p>
                        <p className="flex gap-2 items-center text-gray-600"><IoIosCall color="#DB4B39"/>{campData.phone}</p>
                    </div>
                    <Link to={campData.site}>
                      <button className="w-1/4 absolute bottom-0 py-2 right-3 bg-blue-600 rounded-md text-white">홈페이지로 이동</button>
                    </Link>
                </div>
              </div>

              <hr className="border-slate-950"></hr>

                {/* 부대시설 */}
                <div className="flex-col w-full my-5">
                    <p className="w-full h-10 font-semibold text-lg">부대시설</p>
                    <div className="w-full flex flex-row gap-7">{campData.facility.map(fac=>{
                      let icon = null;
                      switch(fac){
                        case "개수대" : icon = <FaSink size="30"/>; break;
                        case "샤워실" : icon = <FaShower size="30"/>; break;
                        case "와이파이" : icon = <FaWifi size="30"/>; break;
                        case "화장실" : icon = <FaRestroom size="30"/>; break;
                        case "매점" : icon = <FaStore size="30"/>; break;
                      }
                      return(
                        <div className="flex flex-col justify-center text-center" key={fac}>
                          <span className="flex justify-center mb-1">{icon}</span>
                          <span>{fac}</span>
                        </div>
                      )
                    })}</div>
                </div>

                {/* 날씨컴포넌트 */}
                <div className="flex-col w-full my-5">
                    <div className="font-semibold text-lg">캠핑장 부근 날씨</div>
                    <div className="flex flex-col md:flex-row py-5 gap-2 items-center text-center">
                        <div className="py-2 border border-gray-400 rounded-md"><WeatherToday region={campData.region}/></div>
                        <div className="py-5 border border-gray-400 rounded-md"><WeatherWeek region={campData.region}/></div>
                    </div>
                </div>

                <hr className="border-slate-950"></hr>

                {/* 캠핑장소개 */}
                <div className="flex-col w-full h-40 m-2">
                    <p className="w-full h-10 font-semibold text-lg">소개</p>
                    <p className="w-full">{campData.description}</p>
                </div>

                {/* 위치 - 카카오맵API */}
                <div className="flex-col w-full m-2">
                    <p className="w-full h-10 font-semibold text-lg">지도 위치</p>
                    <div className="w-full mb-10">
                        <StaticMap center={{lat:campData.lat, lng:campData.lon}} style={{width:"380px", height:"300px"}} 
                        marker={[
                          {
                            position: {
                              lat: campData.lat,
                              lng: campData.lon
                            },
                            text: "캠핑장 위치",
                          }
                        ]}  level={3}>
                        </StaticMap>
                    </div>
                </div>
            </div>
          </div>

      </BasicLayout>
    </>
  );
}

export default CampingDetailPage;
