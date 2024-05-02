function MainCard({camp}){
    return(
        <div className="flex w-1/2 items-center justify-center bg-gray-100">
            <div className="mx-auto px-2">
                <div className="cursor-pointer rounded-lg bg-white p-4 my-2 shadow duration-150 hover:scale-105 hover:shadow-md">
                    <img className="w-full rounded-lg object-cover object-center" src="https://gocamping.or.kr/upload/camp/1776/thumb/thumb_720_7922zTbLn3nQp8qLRrnUilVU.jpg" />
                    <p className="my-2 ml-4 text-xl font-semibold text-gray-800">캠핑장 이름</p>
                    <p className="mb-1 pl-4 text-gray-500">위치</p>

                </div>
            </div>
        </div>

    )
}
export default MainCard;