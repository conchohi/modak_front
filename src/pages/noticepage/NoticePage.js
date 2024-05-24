// import React from "react";
// import NoticeSideNav from "./NoticeSideNav";
// import BasicLayout from "../../layouts/BasicLayout";

// function Announcements() {
//   const [announcements, setAnnouncements] = React.useState([
//     {
//       id: 1,
//       title: "여름철 캠핑용품 사용 시 주의사항",
//       date: "2024-05-10",
//       content:
//         "\n 안녕하세요 모닥입니다. 여름철 유의하여 즐거운 캠핑 되시길 바랍니다.",
//       image:
//         "https://www.korea.kr/newsWeb/resources/attaches/2021.07/21/3f14218a43f1477dd7e129d3dafb6fc6.jpg",
//     },
//     {
//       id: 2,
//       title: "공지사항 2",
//       date: "2024-05-11",
//       content: "공지사항 내용 2",
//       image: "",
//     },
//     {
//       id: 3,
//       title: "공지사항 3",
//       date: "2024-05-12",
//       content: "공지사항 내용 3",
//       image: "",
//     },
//   ]);
//   const [selectedAnnouncement, setSelectedAnnouncement] = React.useState(null);

//   const handleAnnouncementClick = (announcement) => {
//     if (selectedAnnouncement && selectedAnnouncement.id === announcement.id) {
//       setSelectedAnnouncement(null);
//     } else {
//       setSelectedAnnouncement(announcement);
//     }
//   };

//   return (
//     <div className="container mx-auto px-4">
//       <h1 className="text-3xl font-bold text-center my-8">공지사항</h1>
//       <div className="space-y-5">
//         {announcements.map((announcement) => (
//           <div
//             key={announcement.id}
//             className="bg-white border border-gray-200 shadow-lg rounded-lg p-5 hover:shadow-xl transition-shadow duration-200 ease-in-out cursor-pointer"
//             onClick={() => handleAnnouncementClick(announcement)}
//           >
//             <div className="flex justify-between items-center">
//               <h2 className="text-xl font-semibold">{announcement.title}</h2>
//               <span className="text-sm text-gray-500">{announcement.date}</span>
//             </div>
//             {selectedAnnouncement &&
//               selectedAnnouncement.id === announcement.id && (
//                 <div className="mt-4">
//                   <p className="text-gray-700 whitespace-pre-line">
//                     {announcement.content}
//                   </p>
//                   {announcement.image && (
//                     <img
//                       src={announcement.image}
//                       alt="공지사항 이미지"
//                       className="mt-3 rounded"
//                     />
//                   )}
//                 </div>
//               )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// function NoticePage() {
//   return (
//     <>
//       <BasicLayout>
//         <div className="flex">
//           <div className="w-2/12">
//             {" "}
//             {/* 사이드 네비게이션 바의 너비를 지정 */}
//             <NoticeSideNav />
//           </div>
//           <div className="flex-1">
//             {" "}
//             {/* 공지사항 컨텐츠 영역 */}
//             <Announcements />
//           </div>
//         </div>
//       </BasicLayout>
//     </>
//   );
// }

// export default NoticePage;

import React, { useEffect } from "react";
import axios from "axios";
import NoticeSideNav from "./NoticeSideNav";
import BasicLayout from "../../layouts/BasicLayout";

export const API_SERVER_HOST = "http://localhost:4040";

const prefix = `${API_SERVER_HOST}/api/notice`;

function Announcements() {
  const [announcements, setAnnouncements] = React.useState([]);
  const [selectedAnnouncement, setSelectedAnnouncement] = React.useState(null);

  useEffect(() => {
    // API 호출을 통해 공지사항 데이터를 가져옵니다.
    axios
      .get(`${prefix}/noticeAll`)
      .then((response) => {
        console.log(response.data);
        setAnnouncements(response.data);
      })
      .catch((error) => {
        console.error("공지사항을 불러오는 중 오류가 발생했습니다.", error);
      });
  }, []);

  const handleAnnouncementClick = (announcement) => {
    if (
      selectedAnnouncement &&
      selectedAnnouncement.noticeNo === announcement.noticeNo
    ) {
      setSelectedAnnouncement(null);
    } else {
      setSelectedAnnouncement(announcement);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center my-8">공지사항</h1>
      <div className="space-y-5">
        {announcements.map((announcement) => (
          <div
            key={announcement.noticeNo}
            className="bg-white border border-gray-200 shadow-lg rounded-lg p-5 hover:shadow-xl transition-shadow duration-200 ease-in-out cursor-pointer"
            onClick={() => handleAnnouncementClick(announcement)}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">{announcement.title}</h2>
              <span className="text-sm text-gray-500">{announcement.date}</span>
            </div>
            {selectedAnnouncement &&
              selectedAnnouncement.noticeNo === announcement.noticeNo && (
                <div className="mt-4">
                  <p className="text-gray-700 whitespace-pre-line">
                    {announcement.content}
                  </p>
                  {announcement.imgName && (
                    <img
                      src={announcement.imgName}
                      alt="공지사항 이미지"
                      className="mt-3 rounded"
                    />
                  )}
                </div>
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
      <BasicLayout>
        <div className="flex">
          <div className="w-2/12">
            {" "}
            {/* 사이드 네비게이션 바의 너비를 지정 */}
            <NoticeSideNav />
          </div>
          <div className="flex-1">
            {" "}
            {/* 공지사항 컨텐츠 영역 */}
            <Announcements />
          </div>
        </div>
      </BasicLayout>
    </>
  );
}

export default NoticePage;
