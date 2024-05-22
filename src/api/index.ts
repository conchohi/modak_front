import axios from 'axios';
import { idCheckRequestDto } from "./request/auth";
import { IdCheckResponseDto } from './response/auth';
import { ResponseDto } from './response';

const DOMAIN = "http://localhost:4040";

const API_DOMAIN = `${DOMAIN}/api/v1`;

const ID_CHECK_URL = () => `${API_DOMAIN}/auth/id-check`;

export const idCheckRequest = async (requestBody: idCheckRequestDto) => {
    const result = await axios.post(ID_CHECK_URL(), requestBody)
        .then(response => {
            const responseBody: IdCheckResponseDto = response.data;
            return responseBody;
        })
        .catch(error => {
            if(!error.response || !error.response.data) return null;
            const responseBody: ResponseDto = error.response.data;
            return responseBody;
        })
        return result;
};