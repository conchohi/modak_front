import BasicLayout from "../layouts/BasicLayout";
import MyPageComponent from "../component/MyPageComponent";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function MyPage(){
    const navigate = useNavigate();
    useEffect(()=>{
        if(!localStorage.getItem('access')){
            navigate("/login")
        }
    }, [navigate])
    return(
        <>
            <BasicLayout>
                <MyPageComponent/>
            </BasicLayout>
        </>
    )
}

export default MyPage;