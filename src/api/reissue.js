import axios from "axios";
import { API_SERVER_HOST } from "./campApi";

export const getAccessToken = async () => {
    try {
      const response = await axios.post(`${API_SERVER_HOST}/reissue`, {}, {
        withCredentials: true // 쿠키를 포함하여 요청
      });
  
      // 새로운 access 토큰을 로컬 스토리지에 저장
      const accessToken = response.headers['access'];
      localStorage.setItem('access', accessToken);
  
    } catch (error) {
      console.error('토큰 갱신 실패:', error);
      alert('로그인 시간 만료, 재로그인 하세요')
      logoutFunction();
    }
  };
  

export const logoutFunction =  async () => {
  try {
    // 서버에 로그아웃 요청을 보냅니다.
    const response = await axios.post('http://localhost:4040/logout', {}, {
      withCredentials: true // 쿠키를 포함하여 요청
    });

    if (response.status === 200) {
      // 로그아웃 성공 시, 로컬 스토리지에서 토큰 제거
      localStorage.removeItem('access');
      
      // 홈으로 이동
      window.location.href = '/';
    } else {
      localStorage.removeItem('access');
      
      // 홈으로 이동
      window.location.href = '/';
    }
  } catch (error) {
    console.error('로그아웃 오류', error);
    localStorage.removeItem('access');
      
      // 홈으로 이동
      window.location.href = '/';

  }
};