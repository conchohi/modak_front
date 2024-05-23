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
      throw new Error('토큰 갱신 실패');
    }
  };
  