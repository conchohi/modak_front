import { useEffect, useState } from "react";
import { SouthKoreaSvgMap } from "./SouthKoreaSvgMap";
import WeatherInfo from "../weather/WeatherInfo";
import MainCampList from "../list/MainCampList";
import { getBest4, getBest4ByRegion } from "api/campApi";
import { getAllWeather } from "api/weatherApi";
import CalendarComponent from "component/Calendar";


export const MainMapCamp = () => {
    //날씨에 따라 map 색 정해주는 함수 (차후 설정)
    const setColorByWeather = (weather) => {
        if (weather === "맑음") return "#fffeb3";
        if (weather === "흐림") return " #e0e0de";
        if (weather === "구름") return "#709dc2";
        if (weather === "비") return "#5179fc";
        if (weather === "박무") return "#d5c9dd";
        else return "#ebfffd";
    };
    
    const [tooltipStyle, setTooltipStyle] = useState({});
    const [mapData, setMapData] = useState({});
    const [isOpen, setIsOpen] = useState(false);
    const [bestCampData, setBestCampData] = useState([

    ])
    //전체 날씨 데이터
    const [allWeatherData, setAllWeatherData] = useState([]);

    //지역 선택 시 locale 변경, hover 시 hoverLocale 변경
    const [locale, setLocale] = useState();
    const [hoverLocale, setHoverLocale] = useState();
    const [date, setDate] = useState();

    useEffect(()=>{ 
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 1을 더함
        const day = String(currentDate.getDate()).padStart(2, '0');
        const date = `${year}-${month}-${day}`;
        setDate(date);

        getBest4(date).then(result=>{
            setBestCampData(result.data);
        }).catch(error=>{

        })
        getAllWeather(date).then(result=>{
            setAllWeatherData(result.data);
        }).catch(error=>{

        })
    }, [])

    useEffect(()=>{
        getBest4(date).then(result=>{
            setBestCampData(result.data);
        }).catch(error=>{

        })
        getAllWeather(date).then(result=>{
            setAllWeatherData(result.data);
        }).catch(error=>{

        })
    }, [date])

    useEffect(() => {//전체 날씨 데이터 변경 시 {지역 : 날씨} 형태로 변환 후 MapData 저장
        if(allWeatherData.length > 0){
            const items = allWeatherData.reduce((acc, item) => {
                acc[item.region] = item.weather;
                return acc;
            }, {});
            setMapData(items);
        }
    }, [allWeatherData]);


    useEffect(() => {//지역 클릭 시 locale이 해당 지역 id로 변경할 때 자동으로 BestCampData 변경
        // axios로 setBestCampData() 변경 axios.get("url", locale(차후 지역 번호로 변경))
        if(locale != null){
            getBest4ByRegion(locale).then(result=>{
                setBestCampData(result.data);
            }).catch(error=>{

            })
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
        let current = event.target.id;
        setLocale(current);
         
    };

    return(
            <div className="w-full flex p-2 flex-col md:flex-row mb-10">
                <div className="w-full md:w-1/2 flex items-center justify-center relative">
                    <div className="absolute top-3 right-6 w-1/4">
                        <CalendarComponent callbackFunction={setDate}/>
                    </div>
                    <div className="absolute bottom-3 right-6 flex flex-row border p-3 rounded-xl shadow-md">
                            <div className="w-11 h-12 flex flex-col justify-center items-center text-center text-sm"><div className="h-6 w-6 rounded-full bg-[#fffeb3]"></div>맑음</div>
                            <div className="w-11 h-12 flex flex-col justify-center items-center text-center text-sm"><div className="h-6 w-6 rounded-full bg-[#e0e0de]"></div>흐림</div>
                            <div className="w-11 h-12 flex flex-col justify-center items-center text-center text-sm"><div className="h-6 w-6 rounded-full bg-[#709dc2]"></div>구름</div>
                            <div className="w-11 h-12 flex flex-col justify-center items-center text-center text-sm"><div className="h-6 w-6 rounded-full bg-[#d5c9dd]"></div>안개</div>
                            <div className="w-11 h-12 flex flex-col justify-center items-center text-center text-sm"><div className="h-6 w-6 rounded-full bg-[#5179fc]"></div>비</div>
                            <div className="w-11 h-12 flex flex-col justify-center items-center text-center text-sm"><div className="h-6 w-6 rounded-full bg-[#ebfffd]"></div>눈</div>
                    </div>
                    <div className="w-3/5 ">
                        
                        <SouthKoreaSvgMap data={mapData} setColorByCount={setColorByWeather} onLocationMouseOver={handleLocationMouseOver} onLocationMouseOut={handleLocationMouseOut} onLocationMouseMove= {handleLocationMouseMove} onLocationClick={handleLocationClick}/>
                        {isOpen &&  <div className="w-72 h-72 flex flex-col border border-solid border-black fixed rounded-3xl min-w-20 p-3 bg-white text-black" style={tooltipStyle}>
                        <WeatherInfo region={hoverLocale}/> {/*특정 지역 날씨 데이터 */}
        </               div>}
                    </div>
                </div>
                <div className="mt-5 md:mt-0 w-full md:w-1/2">
                    <MainCampList camps={bestCampData} locale={locale}/>
                </div>
            </div>
        );
};
