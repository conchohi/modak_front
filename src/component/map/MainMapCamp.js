import { useEffect, useState } from "react";
import { SouthKoreaSvgMap } from "./SouthKoreaSvgMap";
import WeatherInfo from "../weather/WeatherInfo";
import MainCampList from "../list/MainCampList";
import { getBest4, getBest4ByRegion } from "api/campApi";
import { getAllWeather } from "api/weatherApi";


export const MainMapCamp = () => {
    //날씨에 따라 map 색 정해주는 함수 (차후 설정)
    const setColorByWeather = (weather) => {
        if (weather === "맑음") return "#F1F1F1";
        if (weather === "흐림") return "#92C7CF";
        if (weather === "구름") return "#E5E1DA";
        if (weather === "비") return "#FBF9F1";
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

    useEffect(()=>{
        console.log(mapData)
    }, [mapData])

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
            <div className="w-full flex p-2 flex-col md:flex-row">
                <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100">
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
