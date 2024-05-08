import { useEffect, useState } from "react";
import { SouthKoreaSvgMap } from "./SouthKoreaSvgMap";
import WeatherInfo from "../weather/WeatherInfo";
import BestCampList from "../list/BestCampList";

const WeatherModal = ({ tooltipStyle, weatherData}) => {
    return (
        <div className="w-72 h-72 flex flex-col border border-solid border-black fixed rounded-3xl min-w-20 p-3 bg-white text-black" style={tooltipStyle}>
            <WeatherInfo weatherData={weatherData}/> {/*특정 지역 날씨 데이터 */}
        </div>
    )

};

export const MapCamp = () => {
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

    //지역 날씨 데이터
    const [weatherData, setWeatherData] = useState({region : "", today : {temp : "", highTemp : "", lowTemp:"", description:"", date:""},
    week : []});

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

    //해당 지역 캠핑장 데이터
    const [bestCampData ,setBestCampData] = useState([{name : "캠핌장1", location : "테스트1"},
    {name : "캠핌장2", location : "테스트2"},
    {name : "캠핌장3", location : "테스트3"},
    {name : "캠핌장4", location : "테스트4"}]);

    //캠핑장 선택 시 locale 변경, hover 시 hoverLocale 변경
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
            setBestCampData([{name : "강원도 캠핌장1", location : "변경테스트1"},
            {name : "강원도 캠핌장2", location : "변경테스트2"},
            {name : "강원도 캠핌장3", location : "변경테스트3"},
            {name : "강원도 캠핌장4", location : "변경테스트4"}
            ])
        }
        
    }, [locale]);

    useEffect(()=>{
        //axios로 setWeather() 처리 -> 특정 날씨 정보 제공 axious.get("url", hoverLocale)
        /*
            setWeather({
                region : , today : {highTemp: , lowTemp, description, temp}, 
                week : [{highTemp : , lowTemp : , description : , date :},  {}, {}, ..., {} ]
            })
        
        */
        if(hoverLocale === "gangwon"){
            setWeatherData(
                {region : "강원도", today : {temp : "18℃", highTemp : "24℃", lowTemp:"14℃", description:"맑음"},
                 week : [{dow:"화", highTemp : 24, lowTemp : 14, description: "맑음"}, 
                {dow:"수",highTemp : 25, lowTemp : 17, description: "맑음"},
                {dow:"목",highTemp : 25, lowTemp : 18, description: "구름"},
                {dow:"금",highTemp : 27, lowTemp : 21, description: "흐림"},
                {dow:"토",highTemp : 26, lowTemp : 20, description: "맑음"},
                {dow:"일",highTemp : 30, lowTemp : 22, description: "햇빛"},
                {dow:"월",highTemp : 24, lowTemp : 12, description: "비"}
            ]})
        } else{
            setWeatherData(
                {region : "부산", today : {temp : "22℃", highTemp : "27℃", lowTemp:"17℃", description:"햇빛"},
                week : [{dow:"화", highTemp : 27, lowTemp : 17, description: "햇빛"}, 
                {dow:"수",highTemp : 25, lowTemp : 17, description: "맑음"},
                {dow:"목",highTemp : 25, lowTemp : 18, description: "구름"},
                {dow:"금",highTemp : 27, lowTemp : 21, description: "흐림"},
                {dow:"토",highTemp : 26, lowTemp : 20, description: "맑음"},
                {dow:"일",highTemp : 30, lowTemp : 22, description: "햇빛"},
                {dow:"월",highTemp : 24, lowTemp : 12, description: "비"}
            ]})
        }
    }, [hoverLocale])

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
            <div className="w-full flex p-2">
                <div className="w-1/2 flex items-center justify-center bg-gray-100">
                    <div className="w-3/5 ">
                        <SouthKoreaSvgMap data={mapData} setColorByCount={setColorByWeather} onLocationMouseOver={handleLocationMouseOver} onLocationMouseOut={handleLocationMouseOut} onLocationMouseMove= {handleLocationMouseMove} onLocationClick={handleLocationClick}/>
                        {isOpen && <WeatherModal tooltipStyle={tooltipStyle} weatherData={weatherData}/>}
                    </div>
                </div>
                <div className="w-1/2">
                    <BestCampList camps={bestCampData}/>
                </div>
            </div>
        );
};
