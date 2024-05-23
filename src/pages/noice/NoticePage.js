import React from "react";
import TopMenu from "../../component/menus/TopMenu";
import BasicMenu from "../../component/menus/BasicMenu";
import Footer from "../../component/footer/Footer";
import NoticeSideNav from "./NoticeSideNav";

function Announcements() {
  const [announcements, setAnnouncements] = React.useState([]);
  const [selectedAnnouncement, setSelectedAnnouncement] = React.useState(null);

  React.useEffect(() => {
    setAnnouncements([
      {
        id: 1,
        title: '여름철 캠핑용품 사용 시 주의사항',
        content: '\n 안녕하세요 모닥입니다. 여름철 유의하여 즐거운 캠핑 되시길 바랍니다.',
        image: 'https://www.korea.kr/newsWeb/resources/attaches/2021.07/21/3f14218a43f1477dd7e129d3dafb6fc6.jpg'
      },
      { id: 2, title: '공지사항 2', content: '공지사항 내용 2', image: '' },
      { id: 3, title: '공지사항 3', content: '공지사항 내용 3', image: '' },
    ]);
  }, []);

  const handleAnnouncementClick = (announcement) => {
    if (selectedAnnouncement && selectedAnnouncement.id === announcement.id) {
      setSelectedAnnouncement(null);
    } else {
      setSelectedAnnouncement(announcement);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center my-8 text-black">공지사항</h1>
      <div className="space-y-5">
        {announcements.map((announcement) => (
          <div key={announcement.id} className="bg-white shadow-lg rounded-lg p-5 hover:shadow-xl transition-shadow duration-200 ease-in-out" onClick={() => handleAnnouncementClick(announcement)}>
            <h2 className="text-xl font-semibold mb-2">{announcement.title}</h2>
            {selectedAnnouncement && selectedAnnouncement.id === announcement.id && (
              <>
                <p className="text-gray-700 whitespace-pre-line">{announcement.content}</p>
                {announcement.image && <img src={announcement.image} alt="공지사항 이미지" className="mt-3 rounded" />}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function NoticePage() {
    return (
        <>
            <BasicMenu />
            <TopMenu />
            <div className="flex">
                <div className="w-11/25"> {/* 사이드 네비게이션 바의 너비를 지정 */}
                    <NoticeSideNav />
                </div>
                <div className="flex-1"> {/* 공지사항 컨텐츠 영역 */}
                    <Announcements />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default NoticePage;
