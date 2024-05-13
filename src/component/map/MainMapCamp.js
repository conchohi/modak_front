import { useEffect, useState } from "react";
import { SouthKoreaSvgMap } from "./SouthKoreaSvgMap";
import WeatherInfo from "../weather/WeatherInfo";
import MainCampList from "../list/MainCampList";

const WeatherModal = ({ tooltipStyle, region}) => {
    return (
        <div className="w-72 h-72 flex flex-col border border-solid border-black fixed rounded-3xl min-w-20 p-3 bg-white text-black" style={tooltipStyle}>
            <WeatherInfo region={region}/> {/*특정 지역 날씨 데이터 */}
        </div>
    )

};

export const MainMapCamp = () => {
    //날씨에 따라 map 색 정해주는 함수 (차후 설정)
    const setColorByWeather = (weather) => {
        if (weather === "구름") return "#F1F1F1";
        if (weather === "햇빛") return "#C1E5DF";
        if (weather === "눈") return "#D9EBE8";
        else return "#ebfffd";
    };
    
    const [tooltipStyle, setTooltipStyle] = useState({});
    const [mapData, setMapData] = useState({});
    const [isOpen, setIsOpen] = useState(false);
    const [bestCampData, setBestCampData] = useState([
        {name:"캠핑장1", location:"강원도", campNo:1},
        {name:"캠핑장2", location:"강원도",campNo:1},
        {name:"캠핑장3", location:"강원도",campNo:1},
        {name:"캠핑장4", location:"강원도",campNo:1}
    ])
    //전체 날씨 데이터
    const [allWeatherData, setAllWeatherData] = useState([{ locale: "부산광역시", variable: "눈" },
        { locale: "대구광역시", variable: "눈" },
        { locale: "대전광역시", variable: "눈" },
        { locale: "강원도", variable: "비" },
        { locale: "광주광역시", variable: "햇빛" },
        { locale: "경기도", variable: "비" },
        { locale: "인천광역시", variable: "구름" },
        { locale: "제주특별자치도", variable: "눈" },
        { locale: "충청북도", variable: "햇빛" },
        { locale: "경상북도", variable: "눈" },
        { locale: "전라북도", variable: "햇빛" },
        { locale: "세종특별자치시", variable: "눈" },
        { locale: "충청남도", variable: "햇빛" },
        { locale: "경상남도", variable: "눈" },
        { locale: "전라남도", variable: "구름" },
        { locale: "울산광역시", variable: "구름" },
        { locale: "서울특별시", variable: "구름" }]);


    //지역 선택 시 locale 변경, hover 시 hoverLocale 변경
    const [locale, setLocale] = useState();
    const [hoverLocale, setHoverLocale] = useState();

    useEffect(()=>{ //해당 컴포넌트 처음 불러올 때 api에서 전체 날씨 정보 가져오고, 전체의 대한 캠핑장 데이터 가져옴
        //차후 api로 불러와서 전체 weatherData와 전체 BestCampData 넣어줌
        // setAllWeatherData();
        // setBestCampData();
    }, [])

    useEffect(() => {//전체 날씨 데이터 변경 시 {지역 : 날씨} 형태로 변환 후 MapData 저장
        const items = allWeatherData.reduce((acc, item) => {
            return Object.assign(Object.assign({}, acc), { [item.locale]: item.variable });
        }, {});
        setMapData(items);
    }, [allWeatherData]);

    useEffect(() => {//지역 클릭 시 locale이 해당 지역 id로 변경할 때 자동으로 BestCampData 변경
        // axios로 setBestCampData() 변경 axios.get("url", locale(차후 지역 번호로 변경))
        if(locale === "gangwon"){
            setBestCampData([{name : "강원도 캠핌장1", location : "변경테스트1",campNo:1},
            {name : "강원도 캠핌장2", location : "변경테스트2",campNo:1},
            {name : "강원도 캠핌장3", location : "변경테스트3",campNo:1},
            {name : "강원도 캠핌장4", location : "변경테스트4",campNo:1}
            ])
        }
        
    }, [locale]);

    const handleLocationMouseOver = (event) => {
        let current = event.target.id;
        setIsOpen(true);
        setHoverLocale(current)
    };

    const handleLocationMouseOut = () => {
        setIsOpen(false);
        
    };

    const handleLocationMouseMove = (event) => {
        const tooltipStyle = {
            top: event.clientY - 100,
            left: event.clientX + 30,
        };
        setTooltipStyle(tooltipStyle);

    };

    const handleLocationClick = (event) => {
        const tooltipStyle = {
            top: event.clientY - 100,
            left: event.clientX + 30,
        };
        setTooltipStyle(tooltipStyle);
        //setLocale(event.target.id) 로 지역 id 가져오기
        let current = event.target.id;
        setLocale(current);
         
    };

    return(
            <div className="w-full flex p-2 flex-col md:flex-row">
                <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100">
                    <div className="w-3/5 ">
                        <SouthKoreaSvgMap data={mapData} setColorByCount={setColorByWeather} onLocationMouseOver={handleLocationMouseOver} onLocationMouseOut={handleLocationMouseOut} onLocationMouseMove= {handleLocationMouseMove} onLocationClick={handleLocationClick}/>
                        {isOpen && <WeatherModal tooltipStyle={tooltipStyle} region={hoverLocale} />}
                    </div>
                </div>
                <div className="mt-5 md:mt-0 w-full md:w-1/2">
                    <MainCampList camps={bestCampData} locale={locale}/>
                </div>
            </div>
        );
};
