const rest_api_key='c97ebfa2e4bb646c4ce81908b4607956'
// const redirect_uri='http://localhost:3000/'
const auth_code_path='https://kauth.kakao.com/oauth/authorize'

export const getKakaoLoginLink =()=>{
    const kakaoURL = `${auth_code_path}?cilent_id=${rest_api_key}&redirect_uri`
}
