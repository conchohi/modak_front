import React from 'react'
import BasicLayout from '../layouts/BasicLayout'

const Login = () => {
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
              <form className="space-y-6">
                <div>
                  <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">
                    아이디
                  </label>
                  <div className="mt-2">
                    <input
                      id="id"
                      name="id"
                      type="id"
                      placeholder="아이디를 입력하세요"
                      autoComplete="id"
                      required
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50 placeholder-gray-400 text-sm py-2 px-3"
                    />
                  </div>
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
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50 placeholder-gray-400 text-sm py-2 px-3"
                    />
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
            </div>
          </div>
        </BasicLayout>
      </>
    )
}

export default Login