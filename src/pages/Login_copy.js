import React, { useState } from 'react';
import BasicLayout from '../layouts/BasicLayout';
import KakaoLoginComponent from '../component/member/KakaoLogin';
import { KAKAO_AUTH_URL } from '../OAuth';

const Login2 = () => {
    // 아이디와 비밀번호를 상태로 관리합니다
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const [idValid, setIdValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);

    // 아이디 입력 시 상태 업데이트 핸들러
    const handleId = (e) => {
        setId(e.target.value);
        const regex =
            /^(?=.*[a-zA-Z])[-a-zA-Z0-9_.]{5,10}$/; // 아이디 정규식 : 특수문자/문자/숫자 포함 형태의 2~10자리 이내 
        if(regex.test(id)){
            setIdValid(true);
        } else{
            setIdValid(false);
        }
    };

    // 비밀번호 입력 시 상태 업데이트 핸들러
    const handlePassword = (e) => {
        setPassword(e.target.value);
        const regex =
            /^(?=.*\d)(?=.[a-zA-Z])[0-9a-zA-Z!@#$%^&*]{8,20}$/; // 비밀번호 정규식 : 특수문자/문자/숫자 포함 형태의 8~20자리
        if(regex.test(password)) {
            setPasswordValid(true);
        } else{
            setPasswordValid(false);
        }
    };

    // 폼 제출 핸들러
    const handleSubmit = (e) => {
        e.preventDefault();
        // 여기서 로그인 처리 로직을 추가할 수 있습니다
    };

    return (
        <>
            <BasicLayout>
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
                            로그인
                        </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="id" className="block text-sm font-medium leading-6 text-gray-900">
                                        아이디
                                    </label>
                                    <div className="text-sm">
                                        <a href="/find/id" className="font-semibold text-indigo-400 hover:text-indigo-500">
                                            아이디를 잊으셨나요?
                                        </a>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="id"
                                        name="id"
                                        type="text"
                                        placeholder="아이디를 입력하세요"
                                        autoComplete="id"
                                        required
                                        value={id}
                                        onChange={handleId}
                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50 placeholder-gray-400 text-sm py-2 px-3"
                                    />
                                </div>
                            </div>

                            <div className='errorMessageWrap'>
                                {
                                    !idValid && id.length > 0 &&(
                                        <div>올바른 아이디를 입력해주세요.</div>
                                    )
                                }
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                        비밀번호
                                    </label>
                                    <div className="text-sm">
                                        <a href="/find/pwd" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                            비밀번호를 잊으셨나요?
                                        </a>
                                    </div>
                                    
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        placeholder="비밀번호를 입력하세요"
                                        autoComplete="current-password"
                                        required
                                        value={password}
                                        onChange={handlePassword}
                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50 placeholder-gray-400 text-sm py-2 px-3"
                                    />
                                </div>
                                <div className='errorMessageWrap'>
                                {
                                    !passwordValid && password.length > 0 &&(
                                        <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
                                    )
                                }
                            </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    로그인
                                </button>
                            </div>
                        </form>

                        <p className="mt-4 text-center text-sm text-gray-500">
                            <a href="/join" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                회원가입하러 가기
                            </a>
                        </p>
                        <hr className="my-8" />
                        <p className="mt-4 text-center text-sm text-gray-500">
                            SNS 계정으로 로그인하기
                        </p>
                        <a href={KAKAO_AUTH_URL} className='kakaobtn'>
                            <img src={process.env.PUBLIC_URL + `assets/Kakao.png`}/>
                        </a>    
                    </div>
                </div>
            </BasicLayout>
        </>
    );
}

export default Login2;
