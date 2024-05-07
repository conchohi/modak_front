import React from "react";
import { useEffect, useState } from "react";
import { SouthKoreaSvgMap } from "./SouthKoreaSvgMap";
import WeatherInfo from "../weather/WeatherInfo";

const DefaultTooltip = ({ tooltipStyle, data }) => {
    return (
        <div className="w-60 h-60 border border-solid border-black fixed rounded-3xl min-w-20 p-3 bg-white text-black" style={tooltipStyle}>
            <WeatherInfo regionNum={data}/>
        </div>
    )

};
export const SouthKoreaMapChart = ({data, setColorByWeather}) => {
    const [mapData, setMapData] = useState({});
    const [tooltipStyle, setTooltipStyle] = useState({});
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const items = data.reduce((acc, item) => {
            return Object.assign(Object.assign({}, acc), { [item.locale]: item.count });
        }, {});
        setMapData(items);
    }, [data]);

    const handleLocationMouseOver = (event) => {
        setIsOpen(true);
        const location = event.target.attributes.name.value;
        const count = mapData[location] ? mapData[location] : 0;
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
        const regionNum = event.target.id;

    };

    return(
            <>
                <SouthKoreaSvgMap data={mapData} setColorByCount={setColorByWeather} onLocationMouseOver={handleLocationMouseOver} onLocationMouseOut={handleLocationMouseOut} onLocationMouseMove= {handleLocationMouseMove} onLocationClick={handleLocationClick}/>
                {isOpen && <DefaultTooltip tooltipStyle={tooltipStyle}/>}
            </>
        );
};
