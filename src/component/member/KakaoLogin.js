import React from "react"

const kakaoLogin = ()=>
    {
        const Rest_api_key='c97ebfa2e4bb646c4ce81908b4607956' //REST API KEY
        const redirect_uri = 'http://localhost:3000/' //Redirect URI
        // oauth 요청 URL
        const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`
        const handleLogin = ()=>{
            window.location.href = kakaoURL
        }
        return(
        <>
        <button onClick={handleLogin}>카카오 로그인</button>
        </>
        );
    }
    export default kakaoLogin