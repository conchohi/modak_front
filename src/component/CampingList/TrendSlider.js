import React, { useCallback, useRef } from "react";
import Slider from "react-slick";
import "./regionNav.css"
import { Link } from "react-router-dom";
import { IoIosArrowDropleftCircle,IoIosArrowDroprightCircle } from "react-icons/io";
import useCustomMove from "../../hooks/useCustomMove";

const items = [ 
{ img: "seoul.png", name: "서울" },
{ img: "busan.png", name: "부산" },
{ img: "daegu.png", name: "대구" },
{ img: "incheon.png", name: "인천" },
{ img: "gwangju.png", name: "광주" },
{ img: "daejeon.png", name: "대전" },
{ img: "ulsan.png", name: "울산" },
{ img: "sejong.png", name: "세종" },
{ img: "gyeonggi.png", name: "경기" },
{ img: "gangwon.png", name: "강원" },
{ img: "chungbuk.png", name: "충북" },
{ img: "chungnam.png", name: "충남" },
{ img: "jeonbuk.png", name: "전북" },
{ img: "jeonnam.png", name: "전남" },
{ img: "gyeongbuk.png", name: "경북" },
{ img: "gyeongnam.png", name: "경남" },
{ img: "jeju.png", name: "제주"}]

const TrendSlider = () => {
  const slickRef = useRef(null);
  const {type, region, searchTerm, moveToList} = useCustomMove();
  const previous = useCallback(() => slickRef.current.slickPrev(), []);
  const next = useCallback(() => slickRef.current.slickNext(), []);

  const settings = {
    arrows: false,
    infinite: false,
    dots: true, // 하단 점으로 페이지네이션
    speed: 500, // 애니메이션 속도
    slidesToShow: 10, // 한 번에 보여줄 슬라이드 수
    slidesToScroll: 3, // 스크롤 할 때마다 넘길 슬라이드 수
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 2,
   
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4

        },
      }
    ],
  };

  return (
    <div className="w-4/5 md:w-full mx-auto relative">
      <Slider {...settings} ref={slickRef}>
        {items.map((item, index) => (
          <div className="flex flex-col justify-center text-center items-center" key={index}>
            <div className="cursor-pointer" onClick={()=>moveToList({region:item.name, type:type, searchTerm:searchTerm})}>
              <img src={`/img/region/${item.img}`} alt={item.name} />
              <p className="text-sm md:text-base">{item.name}</p>
            </div>
          </div>
        ))}
      </Slider>
      <div onClick={previous} className="absolute top-1/3 left-0">
          <IoIosArrowDropleftCircle className="cursor-pointer" size="35"/>
      </div>
       <div onClick={next} className="absolute top-1/3 right-0">
          <IoIosArrowDroprightCircle className="cursor-pointer" size="35" />
      </div>
    </div>
  );
};

export default TrendSlider;
