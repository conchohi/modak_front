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
        title: " 캠핑장 예약은 어떻게 할 수 있나요?",
        content: " 모닥은 캠핑장의 정보제공을 위한 사이트로, 예약서비스는 불가합니다. 다만, 캠핑장 상세페이지에서 캠핑장 개별 '홈페이지 바로가기' 서비스를 제공하고 있으니 참고 부탁드립니다.",
        image: " ",
      },
      { 
        id: 2, 
        title: " 캠핑장 답사가 가능한가요?", 
        content: " 캠핑장은 개개인이 이용하는 시설이며, 개개인의 프라이버시를 존중 및 보호하기 위하여 기본적으로 개별적인 방문 및 답사는 금하고 있습니다.  다만, 몇몇 가능한 캠핑장도 있으므로 별도 문의바랍니다.", 
        image: "" },
      { id: 3, 
        title: "ID/비밀번호를 잊어버렸어요.", 
        content: " 로그인 페이지에 있는 '아이디를 잊으셨나요?' '비밀번호를 잊으셨나요?' 부분을 클릭하면 찾을수 있는 페이지로 이동할 수 있으니 참고부탁드립니다.", 
        image: "" },
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
      <h1 className="text-3xl font-bold text-center my-8 text-black ">FAQ</h1>
      <div className="space-y-6 ">
        {announcements.map((announcement) => (
          <div
            key={announcement.id}
            className="bg-white shadow-lg rounded-lg px-5 py-3 hover:shadow-xl transition-shadow duration-200 ease-in-out "
            onClick={() => handleAnnouncementClick(announcement)}
          >
            <h2 className="text-xl font-semibold mb-2">{announcement.title}</h2>
            {selectedAnnouncement &&
              selectedAnnouncement.id === announcement.id && (
                <>
                  <p className="text-gray-700">
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
