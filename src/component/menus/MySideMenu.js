import React from "react";

function MySideMenu(){
    return(
        <div className="flex flex-col pr-8">
          <h2 className="text-xl font-bold mb-4">마이페이지</h2>
          <ul className="space-y-2">
            <li className="text-sm">회원 정보 수정</li>
            <li className="text-sm">보유한 뱃지</li>
            <li className="text-sm">회원 탈퇴</li>
          </ul>
          <h2 className="text-xl font-bold mt-8 mb-4">캠핑</h2>
          <ul className="space-y-2">
            <li className="text-sm">즐겨 찾기</li>
            <li className="text-sm">캠핑 로그</li>
            <li className="text-sm">작성한 글 보기</li>
            <li className="text-sm">작성한 댓글 보기</li>
          </ul>
        </div>
    )
}   

export default MySideMenu;