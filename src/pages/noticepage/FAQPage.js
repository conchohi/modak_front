import React from "react";
import TopMenu from "../../component/menus/TopMenu";
import BasicMenu from "../../component/menus/BasicMenu";
import Footer from "../../component/footer/Footer";
import NoticeSideNav from "./NoticeSideNav";
import BasicLayout from "layouts/BasicLayout";

function Announcements() {
  const [announcements, setAnnouncements] = React.useState([]);
  const [selectedAnnouncement, setSelectedAnnouncement] = React.useState(null);

  React.useEffect(() => {
    setAnnouncements([
      {
        id: 1,
        title: "자주 묻는 질문",
        content: " ",
        image: " ",
      },
      { id: 2, title: "", content: "", image: "" },
      { id: 3, title: "", content: "", image: "" },
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
      <h1 className="text-3xl font-bold text-center my-8 text-black">FAQ</h1>
      <div className="space-y-5">
        {announcements.map((announcement) => (
          <div
            key={announcement.id}
            className="bg-white shadow-lg rounded-lg p-5 hover:shadow-xl transition-shadow duration-200 ease-in-out"
            onClick={() => handleAnnouncementClick(announcement)}
          >
            <h2 className="text-xl font-semibold mb-2">{announcement.title}</h2>
            {selectedAnnouncement &&
              selectedAnnouncement.id === announcement.id && (
                <>
                  <p className="text-gray-700 whitespace-pre-line">
                    {announcement.content}
                  </p>
                  {announcement.image && (
                    <img
                      src={announcement.image}
                      alt=""
                      className="mt-3 rounded"
                    />
                  )}
                </>
              )}
          </div>
        ))}
      </div>
    </div>
  );
}

function FAQPage() {
  return (
    <>
      <BasicLayout>
        <div className="flex">
          <div className="w-2/12">
            {" "}
            {/* 사이드 네비게이션 바의 너비를 지정 */}
            <NoticeSideNav />
          </div>
          <div className="flex-1">
            {" "}
            {/* FAQ 컨텐츠 영역 */}
            <Announcements />
          </div>
        </div>
      </BasicLayout>
    </>
  );
}

export default FAQPage;
