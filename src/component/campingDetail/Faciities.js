import { FaArrowUpFromGroundWater, FaChildren, FaDumpster, FaWaterLadder } from "react-icons/fa6";
import { MdElectricalServices, MdStadium } from "react-icons/md";
import { FaWifi, FaStore, FaDumbbell, FaTree, FaHotTub, FaMapSigns } from "react-icons/fa";

const  Facilites = ({facilities}) => {
    return (
    <div className="flex-col w-full my-5">
        <p className="w-full h-10 font-semibold text-lg">부대시설</p>
        <div className="w-full flex flex-row flex-wrap gap-10">{facilities.map(facility=>{
        let icon = null;
        switch(facility){
            case "운동시설" : icon = <FaDumbbell size="30"/>; break;
            case "전기" : icon = <MdElectricalServices size="30"/>; break;
            case "무선인터넷" : icon = <FaWifi size="30"/>; break;
            case "장작판매" : icon = <FaTree size="30"/>; break;
            case "온수" : icon = <FaHotTub size="30"/>; break;
            case "트렘폴린" : icon = <FaArrowUpFromGroundWater size="30"/>; break;
            case "물놀이장" : icon = <FaWaterLadder size="30"/>; break;
            case "놀이터" : icon = <FaChildren size="30"/>; break;
            case "산책로" : icon = <FaMapSigns size="30"/>; break;
            case "운동장" : icon = <MdStadium size="30"/>; break;
            case "마트.편의점" : icon = <FaStore size="30"/>; break;
            case "덤프스테이션" : icon = <FaDumpster size="30"/>; break;
        }
        return(
            <div className="flex flex-col justify-center text-center" key={facility}>
            <span className="flex justify-center mb-1">{icon}</span>
            <span>{facility}</span>
            </div>
        )
        })}</div>
</div>  );
}
 
export default Facilites;