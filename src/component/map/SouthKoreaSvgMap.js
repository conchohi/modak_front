import React from "react";
import "./map.css";
import mapData from "./mapData";
export const SouthKoreaSvgMap = (props) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox={mapData.viewBox} className={props.className} role={props.role}  aria-label={mapData.label}>
            {mapData.locations.map((location, index) => {
                let count = props.data[location.name];
                if (!count) {
                    count = 0;
                }
                return <path id={location.id} name={location.name} d={location.path} className={props.locationClassName} tabIndex={props.locationTabIndex} role={props.role} aria-label={location.name}  onMouseOver={props.onLocationMouseOver} onMouseOut={props.onLocationMouseOut} onMouseMove={props.onLocationMouseMove} onClick={props.onLocationClick}
                key= {location.id} fill= {props.setColorByCount(count)} ></path>
            })
            }
    
      </svg>
    )
};

SouthKoreaSvgMap.defaultProps = {
    className: "svg-map",
    role: "none",
    locationClassName: "svg-map__location",
    locationTabIndex: "0",
    locationRole: "none",
};
