import React from "react";

const ModalComponent = ({mesaage, callbackFunction}) => {
    return ( 
        <div className="w-lvw h-lvh z-10 fixed top-0 left-0 bg-black/40">
            <div className="absolute top-1/2 left-1/2 w-[360px] h-[330px] z-50 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow">
                <div className="flex flex-col justify-center">
                    <div className="w-full h-2/3"> {mesaage} </div>
                    <button onClick={callbackFunction}>닫기</button>
                </div>
            </div>
        </div>
     );
}
 
export default ModalComponent;