import React from "react";
import Slider from "react-slick";

const TrendSlider = ({ items }) => {
  const settings = {
    dots: true, // 하단 점으로 페이지네이션
    infinite: true, // 무한 루핑
    speed: 500, // 애니메이션 속도
    slidesToShow: 3, // 한 번에 보여줄 슬라이드 수
    slidesToScroll: 3, // 스크롤 할 때마다 넘길 슬라이드 수
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index}>
            <img src={item.img} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TrendSlider;
