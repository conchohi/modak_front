
import { SouthKoreaMapChart } from "./SouthKoreaMapChart";

const data = [
    { locale: "부산광역시", count: "눈" },
    { locale: "대구광역시", count: "눈" },
    { locale: "대전광역시", count: "눈" },
    { locale: "강원도", count: "비" },
    { locale: "광주광역시", count: "햇빛" },
    { locale: "경기도", count: "비" },
    { locale: "인천광역시", count: "구름" },
    { locale: "제주특별자치도", count: "눈" },
    { locale: "충청북도", count: "햇빛" },
    { locale: "경상북도", count: "눈" },
    { locale: "전라북도", count: "햇빛" },
    { locale: "세종특별자치시", count: "눈" },
    { locale: "충청남도", count: "햇빛" },
    { locale: "경상남도", count: "눈" },
    { locale: "전라남도", count: "구름" },
    { locale: "울산광역시", count: "구름" },
    { locale: "서울특별시", count: "구름" },
];
function Map(){
        const setColorByWeather = (weather) => {
        if (weather === "구름") return "#F1F1F1";
        if (weather === "햇빛") return "#C1E5DF";
        if (weather === "눈") return "#D9EBE8";
        else return "#ebfffd";
    };
    return(
        <SouthKoreaMapChart
            setColorByWeather={setColorByWeather}
            data={data}
        />
    )
}

export default Map;