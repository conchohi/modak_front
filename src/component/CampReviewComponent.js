import React, { useState } from "react";
import { Link } from "react-router-dom";

function CampReviewComponent(){
    return (
        <div key="1" className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-white text-gray-900">
        <Link className="flex items-center justify-center" href="#">
          <span className="sr-only">캠프장 리뷰</span>
        </Link>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-white text-gray-900">
          <div className="containeSr px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <img
                alt="히어로 캠프장"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="550"
                src="/placeholder.svg"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter">금주 최고의 캠프장</h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    다른 캠퍼들의 실제 리뷰를 읽고 다음 모험을 위한 완벽한 캠프장을 찾으세요.
                  </p>
                </div>
                <div>
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                    href="#"
                  >
                    캠프장 둘러보기
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">추천 캠프장 리뷰</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                다른 캠퍼들의 최신 리뷰를 확인해보세요.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <article className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">리뷰 읽기</span>
                </Link>
                <img
                  alt="캠프장 1"
                  className="object-cover w-full h-64"
                  height={500}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "500/500",
                    objectFit: "cover",
                  }}
                  width={500}
                />
                <div className="bg-white p-4 dark:bg-gray-950">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-xl">요세미티 국립공원</h3>
                    <div className="flex items-center gap-1">
                      <span className="font-semibold">4.8</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">
                    아름다운 경치, 잘 관리된 시설, 친절한 직원. 평화로운 휴식을 위해 강력 추천합니다.
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-sm text-gray-500">John Doe</span>
                  </div>
                </div>
              </article>
              <article className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">리뷰 읽기</span>
                </Link>
                <img
                  alt="캠프장 2"
                  className="object-cover w-full h-64"
                  height={500}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "500/500",
                    objectFit: "cover",
                  }}
                  width={500}
                />
                <div className="bg-white p-4 dark:bg-gray-950">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-xl">글레이셔 국립공원</h3>
                    <div className="flex items-center gap-1">
                      <span className="font-semibold">4.6</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">
                    숨막히는 풍경, 잘 갖춰진 캠프장, 친절한 직원. 가족 캠핑 여행에 완벽합니다.
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-sm text-gray-500">Sarah Anderson</span>
                  </div>
                </div>
              </article>
              <article className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">리뷰 읽기</span>
                </Link>
                <img
                  alt="캠프장 3"
                  className="object-cover w-full h-64"
                  height={500}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "500/500",
                    objectFit: "cover",
                  }}
                  width={500}
                />
                <div className="bg-white p-4 dark:bg-gray-950">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-xl">옐로스톤 국립공원</h3>
                    <div className="flex items-center gap-1">
                      <span className="font-semibold">4.9</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">
                    믿을 수 없는 자연 경관, 잘 관리된 캠프장, 지식 있는 직원. 자연 애호가들의 필수 방문지.
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-sm text-gray-500">Emily Wilson</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">최신 캠프장 리뷰</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                다른 캠퍼들의 최신 리뷰를 확인해보세요.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <article className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">리뷰 읽기</span>
                </Link>
                <img
                  alt="캠프장 4"
                  className="object-cover w-full h-64"
                  height={500}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "500/500",
                    objectFit: "cover",
                  }}
                  width={500}
                />
                <div className="bg-white p-4 dark:bg-gray-950">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-xl">그랜드 캐년 국립공원</h3>
                    <div className="flex items-center gap-1">
                      <span className="font-semibold">4.7</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">
                    아름다운 경관, 잘 관리된 시설, 지식 있는 직원. 야외 애호가라면 반드시 방문해야 할 곳.
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-sm text-gray-500">Michael Johnson</span>
                  </div>
                </div>
              </article>
              <article className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">리뷰 읽기</span>
                </Link>
                <img
                  alt="캠프장 5"
                  className="object-cover w-full h-64"
                  height={500}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "500/500",
                    objectFit: "cover",
                  }}
                  width={500}
                />
                <div className="bg-white p-4 dark:bg-gray-950">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-xl">아카디아 국립공원</h3>
                    <div className="flex items-center gap-1">
                      <span className="font-semibold">4.5</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">
                    아름다운 해안 풍경, 잘 갖춰진 캠프장, 친절한 직원. 가족 여행에 완벽합니다.
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-sm text-gray-500">Lisa Brown</span>
                  </div>
                </div>
              </article>
              <article className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">리뷰 읽기</span>
                </Link>
                <img
                  alt="캠프장 6"
                  className="object-cover w-full h-64"
                  height={500}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "500/500",
                    objectFit: "cover",
                  }}
                  width={500}
                />
                <div className="bg-white p-4 dark:bg-gray-950">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-xl">자이언 국립공원</h3>
                    <div className="flex items-center gap-1">
                      <span className="font-semibold">4.8</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">
                    숨막히는 풍경, 잘 관리된 캠프장, 지식 있는 직원. 야외 애호가들의 진정한 보석.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
    </div>
        )
      }

      export default CampReviewComponent;