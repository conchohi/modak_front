
import { SimpleSouthKoreaMapChart } from "react-simple-south-korea-map-chart";
import CustomTooltip from "./CustomTooltip";
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
        const setColorByCount = (count) => {
        if (count =="구름") return "#F1F1F1";
        if (count == "햇빛") return "#C1E5DF";
        if (count > "눈") return "#D9EBE8";
        else return "#ebfffd";
    };
    return(
        <SimpleSouthKoreaMapChart
            setColorByCount={setColorByCount}
            data={data}
            unit =""
            customTooltip={<CustomTooltip/>}
        />
    )
}

export default Map;