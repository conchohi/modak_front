import BasicLayout from "../layouts/BasicLayout";
import MainComponent from "../component/MainComponent";
function IndexPage() {
  return (
    <>
      <BasicLayout>
      <img className="w-full flex justify-center my-5" src="../img/modak_bg_home.png" alt="홈이미지"/>
        <MainComponent />
      </BasicLayout>
    </>
  );
}

export default IndexPage;
