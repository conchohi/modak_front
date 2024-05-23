import React from "react";

function BadgeCard({badgeCode, badgeName}){
    const imgUrl = `/img/badge/${badgeCode}.PNG`
    return(
        <div className="w-full flex flex-col text-center justify-center">
            <img className="w-4/5 mx-auto my-5" src={imgUrl} alt="뱃지 이미지"/>
            <span className="text-sm">{badgeName}</span>
        </div>
    )
}

export default BadgeCard;