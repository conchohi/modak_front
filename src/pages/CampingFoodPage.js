import BasicLayout from "layouts/BasicLayout";
import React from "react";
import CampInfoSideNav from "./campingInformation/CampInfoSideNav";

function CampingFoodPage() {
    return (
            <BasicLayout>
            <div className="flex ">
            <div className="w-2/12 ">
            {" "}
            {/* 사이드 네비게이션 바의 너비를 지정 */}
            <CampInfoSideNav/>
            </div>
            <div className=" flex flex-col items-center justify-center w-1/2  m-auto">
                <div className ="font-semibold text-3xl text-center mt-4  mb-6">간단한 캠핑음식 추천 TOP 5</div>

                <img src="https://images.unsplash.com/photo-1680206893946-e92018016cb0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                className="w-2/4 h-36 mb-6" />

                <div className ="text-center mb-4">
                캠핑장에서 요리하는 것은 집에서 요리하는 것과는 또 다른 재미가 있습니다.
                캠핑요리를 할 때는 가스레인지나 전기레인지를 이용하는 것이 좋습니다.
                캠핑장에서 취사 금지가 되어 있는 곳도 있으니, 미리 확인하는 것이 좋습니다.
                캠핑요리를 할 때는 간단한 음식을 만드는 것이 좋습니다.
                복잡한 음식을 만들면 시간이 오래 걸리고, 설거지거리도 많아집니다.
                </div>
            
                <div className="text-center mb-4 ">
                    <div className="font-semibold text-center mb-2 bg-amber-100 rounded-2xl">1. 간단하면서도 맛있는 스팸 바베큐</div>
                    <div className="text-zinc-600 ">
                    스팸, 야채, 기름, 그리고 소금과 후추 등 재료들을 준비합니다. 
                    야채로는 피망, 양파, 파프리카 등을 사용할 수 있습니다.
                    스팸은 적당한 두께의 슬라이스로 잘라주시고, 야채 역시 먹기 좋은 크기로 썰어주세요. 
                    야채가 너무 크면 익히는데 시간이 걸릴 수도 있습니다.
                    캠핑용 그릴에 기름을 살짝 발라주세요. 그다음, 스팸과 야채를 번갈아 놓아 구울 수 있도록 그릴 위에 올려놓습니다.
                    그릴에 올려 놓은 스팸과 야채에 소금과 후추로 간을 해주시고, 중간중간 뒤집어 가며 고르게 익혀주세요.
                    스팸과 야채가 노릇하게 완전히 익었다면 구워진 스팸과 야채를 접시에 담아 완성합니다.
                    </div>
                </div>

                <div className="text-center mb-4">
                    <div className="font-semibold text-center mb-2 bg-amber-100 rounded-2xl">2. 캠핑장 아침 식사는 에그 스크램블</div>
                    <div className="text-zinc-600">
                    계란을 깨뜨려 그릇에 담고, 소금과 후추를 약간 넣어 잘 섞어줍니다.
                    캠핑용 가스버너에서 중온 불을 연 후, 캠핑용 프라이팬에 버터 또는 올리브 오일을 두르고 녹입니다.
                    버터나 오일이 충분히 녹았다면, 계란 혼합물을 부어줍니다. 
                    계란이 바닥에 붙지 않게 하기 위해 젓가락으로 계속해서 섞어주며 익힙니다.
                    선택적으로 손질한 야채나 베이컨, 햄 등의 토핑을 다양하게 구워두었다면, 프라이팬에 같이 넣고 계란 혼합물과 함께 볶아 줍니다.
                    원하는 만큼 익으면 어울리는 소스를 더해 차나 음료와 함께 아침 식사를 하면 됩니다. 
                    </div>          
                </div>

                <div className="text-center mb-4">
                    <div className="font-semibold text-center mb-2 bg-amber-100 rounded-2xl">3. 캠핑장 식사는 간단하게 볶음밥</div>
                    <div className="text-zinc-600"> 
                    프라이팬 또는 그릴 팬에 식용유를 두르고  중불에 가열합니다.
                    다진 마늘을 볶아 향이 나게 한 후 햄 또는 소시지를 넣어 볶습니다.
                    야채를 넣어 다진 마늘과 햄 또는 소시지와 함께 볶아주세요. 
                    야채가 반이상 익었을 때 계란을 하나씩 깨뜨려 넣고 섞어줍니다. 
                    계란이 완전히 익을 때까지 조리해 주세요.
                    밥을 넣고 소금, 후추로 간을 맞추어 잘 섞어주세요. 원한다면 간장을 더 넣고 섞어 볶아주세요.
                    모든 재료가 골고루 섞인 후, 마지막으로 참기름을 넣고 한 번 더 섞어주면 완성됩니다.
                    </div>
                </div>

                <div className="text-center mb-4">
                    <div className="font-semibold text-center mb-2 bg-amber-100 rounded-2xl">4. 캠핑음식 중 최고 바베큐</div>
                    <div className="text-zinc-600">
                    캠핑용 바베큐 그릴을 준비합니다.
                    먼저 그릴에 숯을 채우고 성냥이나 라이터로 불을 붙여주세요.
                    고기를 구워주기에 충분한 열이 발생할 때까지 기다립니다.
                    준비한 고기를 바베큐 그릴에 올려 구워줍니다. 
                    고기는 본인이 원하는 익힘 정도에 따라 뒤집어가며 구워주면 됩니다.
                    고기가 완전히 익었다면, 야채도 함께 구워줍니다. 
                    야채가 다소 부드러워질 때까지 구워주고, 소스 등의 양념을 이용하여 맛을 내면 더욱 맛있게 즐길 수 있습니다.
                    </div>
                </div>

                <div className="text-center mb-4">
                    <div className="font-semibold text-center mb-2 bg-amber-100 rounded-2xl">5. 초 간단 카레라이스</div>
                    <div className="text-zinc-600">
                    야채와 고기를 씻어서 깨끗이 해놓고, 대파는 적당히 세고 양파와 당근, 감자 등은 크기에 따라 잘라둡니다.
                    프라이팬에 적당량의 식용유를 두르고 기름이 데워지면 채소와 고기를 넣어줍니다.
                    살짝 익힌 채소와 고기에 물을 붓고, 카레 가루를 넣어줍니다. 섞어주면서 끓여주세요.
                    끓인 카레 속에 양념으로 향을 낼 본인이 원하는 재료를 추가하고 중불로 조리해 줍니다.
                    끓은 카레 속에 밥을 넣어줍니다. 밥이 모두 알맞게 섞어지면 카레라이스가 완성됩니다.
                    </div>
                </div>

                <div className="font-semibold text-center mb-8">모두 행복한 캠핑되세요:D</div>
                </div>
            </div>


            </BasicLayout>
    );
}

export default CampingFoodPage;