import axios from "axios";
import latLon from "./latLon";

const weather_api_key = "58aa078022868faa475bb02615907902"
const url = "http://api.openweathermap.org/data/2.5/forecast/daily"
const cnt = 7;
const mode = "json"
const lang = "kr"
const unit = "metric"

function checkLat(region){
    return latLon[region].lat;
}
function checkLon(region){
    return latLon[region].lon;
}

export const getWeatherData = async (region) => {
    let lat = checkLat(region);
    let lon = checkLon(region);
    const response = await axios.get(`${url}?lat=${lat}&lon=${lon}&cnt=${cnt}&appid=${weather_api_key}&mode=${mode}&lang=${lang}&units=${unit}`);

    return response.data
}