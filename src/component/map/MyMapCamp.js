import { useEffect, useState } from "react";
import { SouthKoreaSvgMap } from "./SouthKoreaSvgMap";
import CampLogList from "../list/CampLogList";

export const MyMapCamp = () => {
    //날씨에 따라 map 색 정해주는 함수 (차후 설정)
    const setColorByCount = (count) => {
        if (count > 10) return "#CC0033"
        if (count > 7) return "#D21543";
        if (count > 5) return "#DF3E62";
        if (count > 3) return "#E65272";
        if (count > 0) return "#F27B92";
        else return "#FFFFFF";
    };
    const [mapData, setMapData] = useState({});

    //전체 방문횟수 데이터
    const [countData, setAllWeatherData] = useState([{ locale: "부산광역시", variable: 0 },
        { locale: "대구광역시", variable: 1 },
        { locale: "대전광역시", variable: 3 },
        { locale: "강원도", variable: 7 },
        { locale: "광주광역시", variable: 0 },
        { locale: "경기도", variable: 10 },
        { locale: "인천광역시", variable: 5 },
        { locale: "제주특별자치도", variable: 2 },
        { locale: "충청북도", variable: 4},
        { locale: "경상북도", variable: 0 },
        { locale: "전라북도", variable: 0 },
        { locale: "세종특별자치시", variable: 2 },
        { locale: "충청남도", variable: 6 },
        { locale: "경상남도", variable: 0 },
        { locale: "전라남도", variable: 0 },
        { locale: "울산광역시", variable: 0 },
        { locale: "서울특별시", variable: 12 }]);

    //해당 지역 방문한 캠핑장 데이터
    const [campData ,setCampData] = useState([{name : "캠핌장1", location : "테스트1", score : 4},
    {name : "캠핌장2", location : "테스트2", score : 3},
    {name : "캠핌장3", location : "테스트3", score : 5},
    {name : "캠핌장3", location : "테스트3", score : 2}]);

    //지역 선택 시 locale 변경
    const [locale, setLocale] = useState();

    useEffect(()=>{ //해당 컴포넌트 처음 불러올 때 전체의 대한 캠핑장 데이터 가져옴
        //차후 api로 불러와서 전체 지역 방문 CampData 넣어줌
        // setCampData();
    }, [])

    useEffect(() => {//전체 날씨 데이터 변경 시 {지역 : 방문횟수} 형태로 변환 후 MapData 저장
        const items = countData.reduce((acc, item) => {
            return Object.assign(Object.assign({}, acc), { [item.locale]: item.variable });
        }, {});
        setMapData(items);
    }, [countData]);

    useEffect(() => {//지역 클릭 시 locale이 해당 지역 id로 변경할 때 자동으로 BestCampData 변경
        // axios로 setCampData() 변경 axios.get("url", locale(차후 지역 번호로 변경))
        if(locale === "seoul"){
            setCampData([{name : "서울 캠핌장1", location : "서울특별시 강남구", score : 5},
            {name : "서울 캠핌장2", location : "서울특별시 관악구", score : 4},
            {name : "서울 캠핌장3", location : "서울특별시 동작구", score : 1},
            {name : "서울 캠핌장4", location : "서울특별시 은평구", score : 2}
            ])
        }
        
    }, [locale]);


    const handleLocationClick = (event) => {
        //setLocale(event.target.id) 로 지역 id 가져오기
        let current = event.target.id;
        setLocale(current);
    };

    return(
            <div className="w-full flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100 me-3">
                    <div className="w-3/5">
                        <SouthKoreaSvgMap data={mapData} setColorByCount={setColorByCount} onLocationClick={handleLocationClick}/>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <CampLogList camps={campData}/>
                </div>
            </div>
        );
};
