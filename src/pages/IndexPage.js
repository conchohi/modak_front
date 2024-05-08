import BasicMenu from "../component/menus/BasicMenu";
import MainCard from "../component/MainCard";
import Map from "../component/map/Map";
function IndexPage(){
    return(
        <>
            <BasicMenu/>
            <div className="flex flex-wrap">
                <div className="w-1/2 flex items-center justify-center">
                    <div className="w-2/3">
                        <Map/>
                    </div>
                </div>
                <div className="w-1/2 flex flex-wrap">
                    <MainCard/>
                    <MainCard/>
                    <MainCard/>
                    <MainCard/>
                </div>
            </div>
        </>
    )
}

export default IndexPage;