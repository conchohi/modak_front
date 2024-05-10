import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegHeart, FaHeart} from "react-icons/fa";
import SlideImage from "../slide/SlideImage";

function ListCard({camp}){
    const [favorite, setFavorite] = useState(false);

    const clickHeart = ()=>{
        setFavorite(!favorite);
    }

    return(
        <Link className="w-full flex flex-col md:flex-row mb-3">
            <div className="box-border w-full md:w-1/2 p-3">
                {/*썸네일 이미지*/}
                {/* <img className="w-full rounded-lg" src="https://gocamping.or.kr/upload/camp/6975/thumb/thumb_720_8864VHhvenUMGtZByAoSmY82.jpg"/> */}
                <SlideImage images={["https://gocamping.or.kr/upload/camp/6975/thumb/thumb_720_8864VHhvenUMGtZByAoSmY82.jpg",
                    "https://gocamping.or.kr/upload/camp/6975/thumb/thumb_384_2055aGAnSDO4enwcMgIkbTcd.jpg",
                    "https://gocamping.or.kr/upload/camp/6975/thumb/thumb_384_0318U5bxHC7v1A6uGspxBZCL.jpg",
                    "https://gocamping.or.kr/upload/camp/6975/thumb/thumb_384_3294uw8AApzwjTyKx0LIWAce.jpg"
                ]}/>
            </div>
            <div className="box-border w-full md:w-1/2 px-3 py-3 flex flex-col border border-gray-400 border-dotted rounded-xl">
                <div className="relative w-full h-2/3 flex flex-col border-b pb-3 border-gray-200">                
                    <p className="text-sm text-gray-500 mb-1">오토캠핑{/* {camp.type} 업종*/}</p>
                    <p className="font-semibold mb-3">정선 라만차의 돈키호테 캠핑장{/* {camp.name} */}</p>
                    <p className="text-sm text-gray-500">캠핑로그 (30){/* {camp.name} */}</p>
                    <span className="absolute right-1 bottom-3">{favorite ? <FaHeart size="25" color="red" onClick={clickHeart}/> : <FaRegHeart size="25" onClick={clickHeart}/>}</span>
                </div>
                <div className="w-full h-1/3 flex flex-col pt-2 overflow-hidden">
                    <p className="text-sm"><span className="text-gray-400 mr-3">위치</span>강원 정선군 화암면 그림바위길 1-23</p>
                    <p className="text-sm"><span className="text-gray-400 mr-3">소개</span>왕산해수욕장에 둥지 튼 캠핑장</p>
                    <p className="text-sm"><span className="text-gray-400 mr-3">전화번호</span>1588-3236</p>
                </div>

            </div>

        </Link>
    )
}

export default ListCard;