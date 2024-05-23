import { ResponseDto } from 'api/response';

type ResponseBody <T> = T | ResponseDto | null;

export type{
    ResponseBody
}