const client_id = process.env.c97ebfa2e4bb646c4ce81908b4607956;
const REDIRECT_URI = process.env.http://localhost:3000/;

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?
client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;