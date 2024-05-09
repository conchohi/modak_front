import BasicLayout from "../layouts/BasicLayout";
import MyPageComponent from "../component/MyPageComponent";
function MyPage(){
    return(
        <>
            <BasicLayout>
                <MyPageComponent/>
            </BasicLayout>
        </>
    )
}

export default MyPage;