import React from "react";
import BadgeCard from "../card/BadgeCard";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function BadgeList(){
    return(
        <div className="flex flex-col">
            <div className="flex justify-between mb-5 items-center">
                <span className="font-semibold">나의 활동배지</span>
                <Link to="/myPage/badge" className="text-blue-600 text-sm flex">전체보기 <FaArrowRight className="ms-3" size="14"/></Link>
            </div>
            <div className="flex">
                <div className="w-1/3"><BadgeCard badgeCode="1" badgeName="캠프파이어의 왕"/> </div>
                <div className="w-1/3"><BadgeCard badgeCode="2" badgeName="식물의 수호천사"/> </div>
                <div className="w-1/3"><BadgeCard badgeCode="3" badgeName="최고의 정보사"/> </div>
            </div>
        </div>
    )
}

export default BadgeList;