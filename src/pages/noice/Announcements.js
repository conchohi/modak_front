import React, { useState, useEffect } from "react";
import TopMenu from "../../component/menus/TopMenu";
import BasicMenu from "../../component/menus/BasicMenu";
import Footer from "../../component/footer/Footer";


function Announcements() {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    // 여기서 공지사항 데이터를 가져오는 API 호출을 할 수 있습니다.
    // 임시 데이터로 예시를 들겠습니다.
    setAnnouncements([
      { id: 1, title: '공지사항 1', content: '공지사항 내용 1 입니다.' },
      { id: 2, title: '공지사항 2', content: '공지사항 내용 2 입니다.' },
      { id: 3, title: '공지사항 3', content: '공지사항 내용 3 입니다.' },
      // 추가 공지사항...
    ]);
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold text-center my-5">공지사항</h1>

    </div>
  );
}

export default Announcements;
