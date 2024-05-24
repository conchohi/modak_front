import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function FindIdForm() {
    const [email, setEmail] = useState("");
    const [certificationNumber, setCertificationNumber] = useState("");
    const [isCertificationSent, setIsCertificationSent] = useState(false);
    const [isCertificationVerified, setIsCertificationVerified] = useState(false);
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    const changeEmail = (e) => {
        setEmail(e.target.value);
    };

    const changeCertificationNumber = (e) => {
        setCertificationNumber(e.target.value);
    };

    const sendCertificationEmail = async () => {
        try {
            const response = await axios.post("http://localhost:4040/api/v1/auth/send-certification-email", { email });
            if (response.data.success) {
                setIsCertificationSent(true);
                setMessage("인증번호가 이메일로 전송되었습니다.");
            } else {
                setMessage("이메일 전송에 실패하였습니다. 다시 시도해주세요.");
            }
        } catch (error) {
            setMessage("서버 오류가 발생했습니다. 다시 시도해주세요.");
        }
    };

    const verifyCertificationNumber = async () => {
        try {
            const response = await axios.post("/api/verify-certification-number", { email, certificationNumber });
            if (response.data.success) {
                setIsCertificationVerified(true);
                setMessage("인증번호가 확인되었습니다. 아이디를 이메일로 전송했습니다.");
            } else {
                setMessage("인증번호가 일치하지 않습니다. 다시 시도해주세요.");
            }
        } catch (error) {
            setMessage("서버 오류가 발생했습니다. 다시 시도해주세요.");
        }
    };

    return (
        <div className="h-full w-full flex flex-col items-center justify-center">
            <div className="w-1/3 text-center mt-10 p-5 text-2xl font-bold border-b border-b-black">아이디 찾기</div>
            <div className="flex flex-col mt-5 mb-10 w-1/3">
                <p className="py-3 mb-5 font-light text-sm">
                    가입시 등록한 이메일 입력시 <br /> 아이디의 일부를 알려드립니다.
                </p>
                <label htmlFor="email" className="mb-4">이메일 주소</label>
                <input
                    id="email"
                    name="email"
                    type="text"
                    value={email}
                    onChange={changeEmail}
                    className="border-b border-gray-700 py-1 focus:border-b-2 focus:border-blue-950 transition-colors focus:outline-none"
                    placeholder="ex)abc123@example.com"
                    disabled={isCertificationSent}
                />
                {isCertificationSent && (
                    <>
                        <label htmlFor="certificationNumber" className="mt-4 mb-4">인증번호</label>
                        <input
                            id="certificationNumber"
                            name="certificationNumber"
                            type="text"
                            value={certificationNumber}
                            onChange={changeCertificationNumber}
                            className="border-b border-gray-700 py-1 focus:border-b-2 focus:border-blue-950 transition-colors focus:outline-none"
                            placeholder="인증번호 4자리를 입력해주세요."
                        />
                    </>
                )}
            </div>
            <div className="flex flex-wrap justify-between w-1/3">
                {!isCertificationSent ? (
                    <button
                        className="bg-[#FFC5C5] w-full p-3 mb-3 text-lg font-medium rounded-full"
                        onClick={sendCertificationEmail}
                    >
                        이메일 인증 요청
                    </button>
                ) : (
                    <button
                        className="bg-[#FFC5C5] w-full p-3 mb-3 text-lg font-medium rounded-full"
                        onClick={verifyCertificationNumber}
                        disabled={isCertificationVerified}
                    >
                        인증번호 확인
                    </button>
                )}
                <button className="bg-stone-300 w-[48%] p-3 rounded-full" onClick={() => navigate("/login")}>
                    로그인
                </button>
                <button className="bg-stone-300 w-[48%] p-3 rounded-full" onClick={() => navigate("/find/pwd")}>
                    비밀번호 찾기
                </button>
            </div>
            {message && <div className="mt-4 text-center text-red-500">{message}</div>}
        </div>
    );
}

export default FindIdForm;
