import axios, { AxiosResponse } from 'axios';
import { CheckCertificationRequestDto, EmailCertificationRequestDto, IdCheckRequestDto, SignUpRequestDto} from "./request/auth";
import { CheckCertificationResponseDto, EmailCertificationResponseDto, IdCheckResponseDto, SignUpResponseDto } from './response/auth';
import { ResponseDto } from './response';

const responseHandler = <T>(response:AxiosResponse<any, any>) => {
    const responseBody: T = response.data;
            return responseBody;
};

const errorHandler = (error: any) => {
    if(!error.response || !error.response.data) return null;
    const responseBody: ResponseDto = error.response.data;
    return responseBody;
};

const DOMAIN = "http://localhost:4040";

const API_DOMAIN = `${DOMAIN}/api/v1`;

const SIGN_UP_URL = () => `${API_DOMAIN}/auth/join`;
const ID_CHECK_URL = () => `${API_DOMAIN}/auth/id-check`;
const EMAIL_CERTIFICATION_URL = () => `${API_DOMAIN}/auth/email-certification`;
const CHECK_CERTIFICATION_URL = () => `${API_DOMAIN}/auth/check-certification`;

export const SignUpRequest = async (requestBody: SignUpRequestDto) => {
    const result = await axios.post(SIGN_UP_URL(), requestBody)
        .then(responseHandler<SignUpResponseDto>)
        .catch(errorHandler);
        return result;
}

export const idCheckRequest = async (requestBody: IdCheckRequestDto) => {
    const result = await axios.post(ID_CHECK_URL(), requestBody)
        .then(responseHandler<IdCheckResponseDto>)
        .catch(errorHandler);
        return result;
};

export const emailCertificationRequest = async(requestBody: EmailCertificationRequestDto) => {
    const result = await axios.post(EMAIL_CERTIFICATION_URL(), requestBody)
        .then(responseHandler<EmailCertificationResponseDto>)
        .catch(errorHandler);
        return result;
}

export const checkCertificationRequest = async(requestBody: CheckCertificationRequestDto) => {
    const result = await axios.post(CHECK_CERTIFICATION_URL(), requestBody)
    .then(responseHandler<CheckCertificationResponseDto>)
    .catch(errorHandler);
    return result;
}