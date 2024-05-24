import axios from "axios";
import {API_SERVER_HOST} from "./campApi";
import { getAccessToken, logoutFunction } from "./reissue";

const prefix = `${API_SERVER_HOST}/api/review`;

export const getReview = async (reviewNo) => {
    try {
        const response = await axios.get(`${prefix}/${reviewNo}`);
        return response.data;
    } catch (error) {
        console.error("Error while fetching review list:", error);
        throw error;
    }
};


export const getReviewList = async (page = 1, size = 50) => {
    try {
        const response = await axios.get(`${prefix}/list?page=${page}&size=${size}`);
        return response.data;
    } catch (error) {
        console.error("Error while fetching review list:", error);
        throw error;
    }
};

export const registerReview = async (write) =>{
    const token = localStorage.getItem('access')
    try {
        const response = await axios.post(`${prefix}`, write, {headers:{
            access : token
        }});
        return response.data;
    } catch (error) {
        if(error.response.data === 'access token expired'){
            try{
              getAccessToken()
            }catch(error){
                if(error.response.data === 'refresh token expired'){
                    alert('로그인 시간 만료, 재로그인 하세요')
                    logoutFunction();
                }
            }
        }
    }   
}

export const modifyReview = async (reviewNo,write) =>{
    const token = localStorage.getItem('access')
    try {
        const response = await axios.put(`${prefix}/${reviewNo}`, write, {headers:{
            access : token
        }});
        return response.data;
    } catch (error) {
        if(error.response.data === 'access token expired'){
            try{
              getAccessToken()
            }catch(error){
                if(error.response.data === 'refresh token expired'){
                    alert('로그인 시간 만료, 재로그인 하세요')
                    logoutFunction();
                }
            }
        }
    }   
}
export const deleteReview = async (reviewNo) =>{
    const token = localStorage.getItem('access')
    try {
        const response = await axios.delete(`${prefix}/${reviewNo}`, {headers:{
            access : token
        }});
        return response.data;
    } catch (error) {
        if(error.response.data === 'access token expired'){
            try{
              getAccessToken()
            }catch(error){
                if(error.response.data === 'refresh token expired'){
                    alert('로그인 시간 만료, 재로그인 하세요')
                    logoutFunction();
                }
            }
        }
    }   
}
    export const existByCampNo = async (campNo) =>{
        const token = localStorage.getItem('access')
        try {
            const response = await axios.get(`${prefix}/exist`, {params:{campNo:campNo},headers:{
                access : token
            }});
            return response.data;
        } catch (error) {
            if(error.response.data === 'access token expired'){
                try{
                  getAccessToken()
                }catch(error){
                    if(error.response.data === 'refresh token expired'){
                        alert('로그인 시간 만료, 재로그인 하세요')
                        logoutFunction();
                    }
                }
            }
        }   
    
}