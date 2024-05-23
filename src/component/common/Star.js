import { FaStar, FaStarHalf } from 'react-icons/fa';

const Star = ({score}) => {
    let floorScore = Math.floor(score);
    let decimal = score - floorScore;
    let arr = Array(floorScore).fill(0);
    return (  
        <div className="flex flex-row gap-1 mb-1">
            {arr.map(star=>{
                return (
                    <><FaStar size="13" color='#FFD400'/></>
                )
            })}
            {(decimal == 0.5 && <FaStarHalf size="13" color='#FFD400'/>  )}
        </div>
    );
}
 
export default Star;