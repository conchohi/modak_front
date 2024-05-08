import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

function FindIdForm({title, content, find, btn1, btn2}){
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const changeInput = (e) =>{
        setInput(e.target.value);
    }
    
    const findEmail= () => {
        //axios.get(input);
    }
    
    return(
        <div className="h-full w-full flex flex-col items-center justify-center">
            <div className="w-1/3 text-center  mt-10  p-5 text-2xl font-bold border-b border-b-black">아이디 찾기</div>
            <div className="flex flex-col mt-5 mb-10 w-1/3">
                <p className="py-3 mb-5 font-light text-sm">가입시 등록한 휴대폰 번호 입력시 <br/> 아이디의 일부를 알려드립니다.</p>
                <label for="phone" className="mb-4">휴대폰 번호</label>
                <input
                    id="phone" name="phone" type="text" className="border-b border-gray-700 py-1 focus:border-b-2 focus:border-blue-950 transition-colors focus:outline-none"
                placeholder="-제외하고 입력"/>
            </div>
            <div className="flex flex-wrap justify-between w-1/3">
                <button className="bg-[#FFC5C5] w-full p-3 mb-3 text-lg font-medium" onClick={findEmail}>아이디 찾기</button>
                <button className="bg-stone-300 w-[48%] p-3" onClick={()=>{navigate("/login")}}>로그인</button>
                <button className="bg-stone-300 w-[48%] p-3" onClick={()=>{navigate("/find/pwd")}}>비밀번호 찾기</button>
            </div>
        </div>
    )
}

export default FindIdForm;