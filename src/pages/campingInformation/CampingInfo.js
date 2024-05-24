import React, { useState } from "react";
import CampInfoSideNav from "./CampInfoSideNav";
import BasicLayout from "layouts/BasicLayout";

const cardData = [
  {
    id: 1,
    imageUrl: "img/info/0.jpg",
    title: "안전을 위한 캠핑 준비물",
  },
  {
    id: 2,
    imageUrl: "img/info/1.jpg",
    title: "어서와 캠핑은 처음이지?",
  },
  {
    id: 3,
    imageUrl: "img/info/2.jpg",
    title: "준비물 꼼꼼하게 준비하기",
  },
  {
    id: 4,
    imageUrl: "img/info/3.jpg",
    title: "안전하고 멋스러운 캠핑룩",
  },
  {
    id: 5,
    imageUrl: "img/info/4.jpg",
    title: "캠핑 전 체크리스트",
  },
  {
    id: 6,
    imageUrl: "img/info/5.jpg",
    title: "맛있고 안전한 캠핑요리",
  },
  {
    id: 7,
    imageUrl: "img/info/6.jpg",
    title: "캠핑장에서도 자나깨나 불조심",
  },
  {
    id: 8,
    imageUrl: "img/info/7.jpg",
    title: "응급상황 시 대처방법",
  },
];

function CampingInfo() {
  const [currentCard, setCurrentCard] = useState(0);

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % cardData.length);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + cardData.length) % cardData.length);
  };

  return (
    <>
      <BasicLayout>
        <div className="flex h-screen">
          <div className="w-2/12">
            {" "}
            {/* 사이드 네비게이션 바의 너비를 지정 */}
            <CampInfoSideNav />
          </div>
          <div className="flex-1 flex flex-col items-center justify-center bg-white p-11">
            <div className="max-w-lg w-full bg-slate-50 shadow-md rounded-lg overflow-hidden">
              <img
                src={`/${cardData[currentCard].imageUrl}`}
                alt={cardData[currentCard].title}
                className="w-[70vw] h-[60vh] object-contain"
              />
              <div className="p-5">
                <h2 className="text-2xl font-bold mb-2">
                  {cardData[currentCard].title}
                </h2>
                <p>{cardData[currentCard].description}</p>
              </div>
              <div className="flex justify-between p-5">
                <button
                  onClick={prevCard}
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
                >
                  이전
                </button>
                <button
                  onClick={nextCard}
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
                >
                  다음
                </button>
              </div>
            </div>
          </div>
        </div>
      </BasicLayout>
    </>
  );
}

export default CampingInfo;
