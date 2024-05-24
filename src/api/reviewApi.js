import axios from "axios";
import {API_SERVER_HOST} from "./campApi";

const prefix = `${API_SERVER_HOST}/api/review`;

export const getReviewList = async (page = 1, size = 50) => {
    try {
        const response = await axios.get(`${prefix}/list?page=${page}&size=${size}`);
        return response.data;
    } catch (error) {
        console.error("Error while fetching review list:", error);
        throw error;
    }
};
