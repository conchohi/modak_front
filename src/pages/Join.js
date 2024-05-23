import React, { useState } from 'react';
import BasicLayout from '../layouts/BasicLayout';

const Join = () => {
    const [formData, setFormData] = useState({
        id: '',
        password: '',
        password_check: '',
        nickname: '',
        phone_number: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // 여기서 회원가입 처리 로직을 추가할 수 있습니다.
        console.log(formData);
    };

    return (
        <>
            <BasicLayout>
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-md bg-white shadow-md rounded px-8 py-8">
                        <h2 className="mt-4 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
                            회원가입
                        </h2>

                        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                            <div>
                                <label htmlFor="id" className="block text-sm font-medium leading-6 text-gray-700">아이디</label>
                                <input
                                    id="id"
                                    name="id"
                                    type="text"
                                    placeholder="아이디를 입력해주세요."
                                    autoComplete="id"
                                    required
                                    value={formData.id}
                                    onChange={handleInputChange}
                                    className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50 placeholder-gray-400 text-sm py-2 px-3"
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-700">비밀번호</label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="비밀번호를 입력해주세요."
                                    autoComplete="new-password"
                                    required
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50 placeholder-gray-400 text-sm py-2 px-3"
                                />
                            </div>

                            <div>
                                <label htmlFor="password_check" className="block text-sm font-medium leading-6 text-gray-700">비밀번호 확인</label>
                                <input
                                    id="password_check"
                                    name="password_check"
                                    type="password"
                                    placeholder="비밀번호를 확인해주세요."
                                    autoComplete="new-password_check"
                                    required
                                    value={formData.password_check}
                                    onChange={handleInputChange}
                                    className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50 placeholder-gray-400 text-sm py-2 px-3"
                                />
                            </div>

                            <div>
                                <label htmlFor="nickname" className="block text-sm font-medium leading-6 text-gray-700">닉네임</label>
                                <input
                                    id="nickname"
                                    name="nickname"
                                    type="text"
                                    placeholder="사용할 닉네임을 입력해주세요."
                                    autoComplete="nickname"
                                    required
                                    value={formData.nickname}
                                    onChange={handleInputChange}
                                    className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50 placeholder-gray-400 text-sm py-2 px-3"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone_number" className="block text-sm font-medium leading-6 text-gray-700">휴대폰번호</label>
                                <input
                                    id="phone_number"
                                    name="phone_number"
                                    type="tel"
                                    placeholder="'-'를 제외한 숫자만 입력하세요."
                                    autoComplete="tel"
                                    required
                                    value={formData.phone_number}
                                    onChange={handleInputChange}
                                    className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50 placeholder-gray-400 text-sm py-2 px-3"
                                />
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    회원가입 완료
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </BasicLayout>
        </>
    )
}

export default Join;
