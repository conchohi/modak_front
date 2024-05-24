
import { Link, useNavigate, useParams } from "react-router-dom";
import BasicLayout from "../layouts/BasicLayout";
import { useEffect, useState } from "react";
import WeatherToday from "../component/weather/WeatherToday";
import WeatherWeek from "../component/weather/WeatherWeek";
import { StaticMap } from "react-kakao-maps-sdk";
import { IoIosCall } from "react-icons/io";
import { FaMapMarkerAlt} from "react-icons/fa";
import { getCamp } from "api/campApi";

import ReviewList from "component/list/ReviewList";
import { FaRegHeart, FaHeart} from "react-icons/fa";
import Facilites from "component/campingDetail/Faciities";
import { clickLikeApi, clickUnLikeApi, isLike } from "api/favoirtesApi";
import ModalComponent from "component/common/ModalComponent";
import { getAccessToken } from "api/reissue";


function CampingDetailPage() {
  const {campNo} = useParams();
  const [campData,setCampData] = useState({facilities:[], types:[], reviewList:[] });
  const [like, setLike] = useState(false);

  const [openModal, setOpenModal] = useState(false);

   
  const navigate = useNavigate();
  
  useEffect(()=>{
    getCamp(campNo).then(result=>{
      setCampData(result.data)
      }
    )

    if(localStorage.getItem("access")){
      isLike(campNo).then(result=>{
          setLike(result.isLike)
        }
      ).catch(error=>{
        if(error.response.data === 'access token expired'){
          try{
            getAccessToken()
          }catch(error){

          }
        } else {
          setOpenModal(true)
        }
      })
    }
  }, [campNo])


  const clickLike = () =>{
    clickLikeApi(campNo).then(result=>{
      setLike(true)
    }).catch(error=>{
      if(error.response.data === 'access token expired'){
        try{
            getAccessToken()
          }catch(error){
            
          }
      } else {
        setOpenModal(true)
      }
    })
  }

  const clickUnLike = () =>{
    clickUnLikeApi(campNo).then(result=>{
      setLike(false)
    }).catch(error=>{
      if(error.response.data === 'access token expired'){
        try{
          getAccessToken()
        }catch(error){
          
        }
      } else {
        setOpenModal(true)
      }
    })
  }



  return (
    <> 
      <BasicLayout>
        {openModal && <ModalComponent message={'로그인 후 이용할 수 있습니다.'} callbackFunction={()=>{
          navigate('/login')
        }}/>}
          <div className="w-full h-full flex flex-col justify-center items-center space-y-4 border-2 border-gray-200">
            <div className="text-3xl font-bold text-center py-5">캠핑장 상세 보기</div>
            <div className="w-2/3 mx-auto ">
              <img className="w-full" src={campData.imgName || "https://i.pinimg.com/564x/db/e2/00/dbe200652abc87bee7b9cbdee59dedcd.jpg"}/>
              <div className="w-full my-5 relative">
                {/* 캠핑장 이름과 홈페이지 이동 버튼 */}
                <div className="flex justify-between mt-3">
                    <div className="w-full space-y-4">
                        <p className="text-gray-400">{campData.types.map(type=>{
                          return(<span className="mb-3">{type}</span>)
                        })}</p>
                        <div className="flex justify-between">
                            <p className="text-2xl font-semibold flex gap-2 items-center">{campData.name}</p>
                            {like ? <FaHeart className="cursor-pointer" onClick={clickUnLike} size="30" color="#D1180B"/> : <FaRegHeart className="cursor-pointer" onClick={clickLike} size="30" color="#D1180B"/>}
                        </div>
                        <p className="flex gap-2 items-center "><FaMapMarkerAlt color="#2291F2"/> {campData.address}</p>
                        <p className="flex gap-2 items-center text-gray-600"><IoIosCall color="#DB4B39"/>{campData.phone || "010-1234-5678"}</p>
                    </div>
                    <Link to={campData.homePage}>
                      <button className="w-1/4 absolute bottom-0 py-2 right-3 bg-blue-600 rounded-md text-white">홈페이지로 이동</button>
                    </Link>
                </div>
              </div>

              <hr className="border-slate-950"></hr>

                {/* 부대시설 */}
                <Facilites facilities={campData.facilities}/>

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
                <div className="flex-col w-full min-h-40 mx-2 my-4">
                    <p className="w-full h-10 font-semibold text-lg">소개</p>
                    <p className="w-full">{campData.intro || campData.name + "은 " + campData.address + "에 위치한 캠핑장입니다. 많이 놀러오세요"}</p>
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
                <hr className="border-slate-950 mb-5"></hr>
                {/* 리뷰 */}
                <ReviewList reviewList={campData.reviewList}/>
            </div>
          </div>

      </BasicLayout>
    </>
  );
}

export default CampingDetailPage;
