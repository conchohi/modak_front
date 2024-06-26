

### [중앙정보기술인재개발원] <br/> 
##### 클라우드 데브옵스 프론트엔드&백엔드 자바(JAVA) 풀스택 개발자 취업캠프


# 🚩SpringBoot Project 
![logo](https://github.com/conchohi/modak_backend/assets/156064008/77fd10fe-1a88-4dc7-be89-c0b11e7a9666) <br/>
🏕️ [MO_DAK] 날씨 및 지역 기반 캠핑장 추천 서비스

---

## 📆개발기간
2024.4.19~2024.5.26

---

## 👀프로젝트 소개
코로나 19 팬데믹 현상이 축소되면서 야외 활동과 여행이 증가하며 캠핑의 수요가 늘어났다. <br/>
이와 더불어 개별 여행의 선호도가 증가하며 다양한 정보를 얻기 위한 SNS 활동이 활발해졌다.<br/>
이에 따라 날씨 API와 캠핑장 API를 활용한 필터화로 캠핑장을 추천하고 타인과의 정보를 공유할 수 있는 공간을 구현한 <br/>
**[MO_DAK] 서비스를 제공함** <br/><br/>


##### 1. 캠핑장 이용자의 경험을 반영한 다양한 후기 제공.<br/>
##### 2. 다양한 각도에서 캠핑 관련 정보를 쉽게 찾을 수 있는 플랫폼 제공.<br/>
##### 3. 공공 API 데이터(예: 날씨 정보)를 활용한 날씨에 따른 맞춤 캠핑지 추천.

---

## 👥팀명/팀원 소개
#### 팀명 : 장작
“각각의 나무가 모여 불꽃을 피우듯, 우리는 함께 모여 열정을 태웁니다."
|**백은혜**|**김보라**|**도현우**|**박제용**|**이성훈**| 
|:---:|:---:|:---:|:---:|:---:|
|**팀  장**|**팀  원**|**팀  원**|**팀  원**|**팀  원**|
|[🔗](https://github.com/dmsp0)|[🔗](https://github.com/kimpurple0520)|[🔗](https://github.com/noonayasalido)|[🔗](https://github.com/ParkJeYong)|[🔗](https://github.com/conchohi)|

<br/>

## ⚠️ 팀 규칙

1. **지각 결석시 미리 연락**
2. **남는 요일 : 소통하면서 조정**
3. **코드리뷰 매일하기**
4. **깃허브로 버전관리**
5. **카톡 확인시 답장이나 확인**
6. **서로 불편한점은 빠르게 말하고 풀기**
7. **의견제시 자유롭게 하기**
8. **수행률 100% 달성하기**

---

## 🖥 기술 스택
<div>
<h4> ❄ 프론트 ❄</h4>
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"/><img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/> <br/>
<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white/> <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/> <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"/> <br/>

<h4> 🍀 백엔드 & DB 🍀 </h4>
<img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white"/> <img src="https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white"/> <img src="https://img.shields.io/badge/Spring_Security-6DB33F?style=for-the-badge&logo=Spring-Security&logoColor=white"/> <img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white"/> <br/>

<h4> ⚙ 기타 ⚙ </h4>
<img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white"/>
<h6>버전 정보 : </h6>
<h6> JAVA( JDK 17.0 )<br/> Apache Tomcat 10.1.20 <br/>
  SpringBoot 3.2.5 <br/> SpringBoot Security 6.3.0 <br/> Spring Data JPA 3.3.0  <br/> React 18.3.1 <br/>  tailwindcss 3.4.3 <br/> node.js 18.20.2  <br/>axios 1.7.2</h6>
</div>

---

## 📃 요구사항 정의서

[자세히 보기](https://docs.google.com/spreadsheets/d/1ZJ1U0nlnIto1heOHKlIkDKd8F0rapEHRdtkqLLsWZ-8/edit#gid=193885954)

#### 1. `캠핑장`
- 전체 캠핑장 목록을 **조회**할 수 있어야 한다.
- 캠핑장 목록 조회 시 **페이징 처리, 검색, 카테고리별 조회**가 가능해야 한다.
- 특정 캠핑장을 **상세 조회**할 수 있어야 한다
- 사용자는 캠핑장을 **좋아요**할 수 있다.
- 캠핑장 정보는 **주기적으로 업데이트**되어야 한다.
- 
#### 2. `날씨`
- 지역별, 캠핑장 근처 날씨를 **확인**할 수 있어야 한다.
- 오늘의 날씨는 **1시간 단위로 업데이트**되어야 한다.
- 2주간 날씨 예측은 **매일 업데이트**되어야 한다.
- 지도를 통해 시각적으로 날씨를 **확인**할 수 있어야 한다.
  
#### 3. `사용자`
- 사용자는 **회원가입, 로그인**을 해야 한다.
- 사용자는 마이페이지를 통해 자신의 정보를 **조회**할 수 있어야 한다.
- 사용자는 닉네임, 프로필, 비밀번호 등을 **수정**할 수 있어야 한다.

#### 4. `회원가입`
- 회원가입 시 아이디, 닉네임, 비밀번호, 이메일을 통해 가입한다.
- 회원가입 시 **이메일 인증**이 필수이다.

#### 5. `로그인`
- 로그인 시 **토큰 기반 인증 방식**을 사용하여 무상태를 유지한다.
- jwt 토큰은 **access, refresh** 두 종류를 사용한다.
- 카카오, 네이버 등 소셜 로그인을 지원한다. 

#### 6. `후기`
- 사용자는 캠핑장에 대한 후기를 **작성, 수정, 삭제**할 수 있다.
- 타인이 남긴 캠핑장 후기를 **조회**할 수 있어야 한다.

---

## 📈 개발 일정
<img width="683" alt="개발일정" src="https://github.com/conchohi/modak_backend/assets/156064008/18ce3989-5fa7-4a77-ae49-8935a48ae270">

---

## 💾 REST API 명세서 
[API 명세서](https://spice-visitor-e5e.notion.site/82da260888fb414388655ac26d4eb2e1?v=a192dcef01ab4239900acf5a4d587699&pvs=4)

---

## 📚 ERD
<img width="904" alt="ERD" src="https://github.com/conchohi/modak_backend/assets/156064008/4c655043-2785-45e7-b645-3ef162cdeb87">

---

## ⌨ 주요 기능 시연
<h3>YouTube 시연 영상</h3>
<h4>https://youtu.be/48yzR_39_cI?feature=shared</h4>
<a href="https://www.youtube.com/watch?v=48yzR_39_cI" target="_blank"><img width="429" alt="logo" src="https://github.com/conchohi/modak_front/assets/156064008/c556b809-30e3-4f49-96ba-1fb62de77532">
</a>

<h3>발표 자료</h3>
<a href="https://www.canva.com/design/DAGFvzUHaxY/KeJx6AEfqk7MH2kHC_Zfjg/edit?utm_content=DAGFvzUHaxY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
<img width="805" alt="발표자료" src="https://github.com/conchohi/modak_front/assets/156064008/0da397a4-21d6-4abd-96dd-3bd48d239346">
</a>

### 페이지 구현


<details><summary>메인 페이지 
</summary>
<img width="1129" alt="메인" src="https://github.com/conchohi/modak_backend/assets/156064008/c1e732bc-6a01-4fa4-bbbb-41a14938eebb">
<img width="225" alt="메인6" src="https://github.com/conchohi/modak_backend/assets/156064008/2e57724f-3da8-4b13-8504-488f1cf98f4e">
<img width="398" alt="메인4" src="https://github.com/conchohi/modak_backend/assets/156064008/e681d836-167c-455d-b96b-1f8f074441b3">
</details>



<details><summary>
로그인, 회원가입
</summary>
<img width="441" alt="로그인" src="https://github.com/conchohi/modak_backend/assets/156064008/33c053f5-f778-4afc-9bae-b4cb45c16073">
<img width="911" alt="회원가입" src="https://github.com/conchohi/modak_backend/assets/156064008/b7a78a44-1581-4ff8-83bc-a79b122a175e">
</details>



<details><summary>캠핑장 상세
</summary>


<img width="752" alt="상세1" src="https://github.com/conchohi/modak_backend/assets/156064008/ef8fe594-0ffb-4d41-bc73-e71200d60883">
<img width="726" alt="상세2" src="https://github.com/conchohi/modak_backend/assets/156064008/fa6247c2-e123-4d76-a1d3-12b3af2ff125">
<img width="737" alt="상세3" src="https://github.com/conchohi/modak_backend/assets/156064008/f278cfa6-3fc2-4db2-b3da-a40dc90e9568">
</details>


<details><summary>캠핑장 후기
</summary>
<img width="1058" alt="캠핑장 리뷰" src="https://github.com/conchohi/modak_backend/assets/156064008/96760278-b36e-463e-8704-bfb743dfabcd">
</details>



<details><summary>마이페이지
</summary>
<img width="1161" alt="마이페이지1" src="https://github.com/conchohi/modak_backend/assets/156064008/77ef7201-f3ae-410f-a5e5-e79c987b530a">
<img width="993" alt="마이페이지2" src="https://github.com/conchohi/modak_backend/assets/156064008/717b43a0-2c90-4d71-9aba-4596d4699bdd">
</details>




---

## 🎨 추후 개선 사항
1. 회원 탈퇴 기능 추가 <br/>
&nbsp; -> 즐겨찾기, 리뷰 외래키 제약 조건을 고려하여 기능 구현 필요. <br/><br/>
2. 후기 및 즐겨찾기 페이징 처리 추가 구현<br/>
&nbsp; -> 사용자의 편의성을 증가시키기 위함. 페이징 처리 대신 '최상단으로 이동하기 버튼 구현으로 대체 가능'<br/><br/>
3. 비밀번호 재설정 기능 추가<br/>
&nbsp; -> 비밀번호를 잊은 사용자를 위한 기능으로 초반에 고려한 '이메일로 비밀번호 인증번호 전송하고 일부 알려주기' 대신 비밀번호 자체 재설정 기능으로 구현 필요.<br/><br/>
5. CI/CD 기반 배포<br/><br/>
6. 시설 필터화 기능 추가 구현<br/>
&nbsp; -> 편의시설, 서비스 등 다양한 조건 활용하기.<br/><br/>
7. 리뷰 수정 상세페이지에서도 가능하도록 구현<br/>
&nbsp; -> 현재는 마이페이지에서만 수정 가능. 타인의 계정과 현재 사용자의 계정을 구분할 수 있는 코드 추가로 상세페이지 자체에서 리뷰 수정을 가능토록 추가 구현 필요. <br/>

---

## 📩 개인별 후기
|이름 |후기|
|:---:|--------|
| 김보라 |그동안 배운 것을 통해 결과물을 만들어낼 수 있다는 것이 매우 뿌듯하고, 좋은 조원들과 함께 해서 끝까지 완주할 수 있었던 것 같다. 막히는 부분을 만났을 때 해결하는 법을 배워나갈 수 있었고, 아직 부족한 부분은 많지만 앞으로 성장할 수 있는 방법을 찾을 수 있어서 감사하고 뜻깊었던 프로젝트였다.|
| 도현우 |혼자선 절대 이루지 못할 프로젝트를 팀원들과 함께 마무리 하게 되어 매우 기쁘다. 많이 부족한 나에게 불만 하나 말하지 않고 오히려 날 도와주고 팀원으로서 배려해준 팀원들에게 고마운 마음과 미안한 마음이 우선이다. 그래도 이번 프로젝트 덕분에 내가 프론트엔드라는 길에 눈을 뜨게 된 것에 매우 감사하게 생각하고 있고 좋은 경험을 할 수 있었다고 생각한다.|
| 박제용 |스프링부트와 JPA를 활용하여 백엔드를 구현하고, 프론트에선 리액트 테일윈드를 사용하여 웹 애플리케이션을 구축하는데 필요한 기술을 배울 수 있었어서 좋았다. 백엔드와 프론트엔드를 연결하는 과정에서 api 통신, cors 설정, 데이터베이스 연동 등 혼자라면 어려웠을 작업을 조원들의 많은 도움으로 완성 할 수 있었다.|
| 백은혜 |리액트로 프론트를 구현하는 것이 처음에는 어려웠으나 여러번 사용되는 요소에 대해서 중복적인 코드가 아닌 props의 사용으로의 편리함을 느낄 수 있었고 이메일 인증을 구현하면서 실제 전송되는 과정이 가장 흥미로웠다. 무엇보다 함께 해결하고 고민하는 과정을 통해 협업의 중요성을 한번 더 깨닫는 계기가 되었다.|
|  &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; 이성훈 &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;|혼자였다면 마무리가 쉽지 않았을 분량을 팀원과 협업으로 완성 시켜 뿌듯했다. 협업을 하면서 개인 간 작업 내용을 코드 리뷰를 통해 공유하였는데 팀원들의 코드를 이해하는데 있어서 소통과 클린 코드의 중요성을 깨달았다. 또한 프로젝트를 진행하면서 수정 사항도 많았는데 클래스 별 책임을 분리하여 수정이 용이하였어서 단일 책임의 원칙의 중요함을 더욱 깨닫는 계기가 되었다.|

---

### 🏷 사용한 문서 도구
백엔드 : [바로가기](https://github.com/conchohi/modak_backend)<br/>
프론트 : [바로가기](https://github.com/conchohi/modak_front) <br/>
노션 : [바로가기](https://miniature-zinc-da3.notion.site/1-bc3939ba19d84b92950ac1291ca4d51c)<br/>
피그마 : [바로가기](https://www.figma.com/design/69DakzYeLHETbyEsGp1rvo/1%EC%B0%A8-%EA%B8%B0%EC%97%85-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8?t=Yqpkr3QsBFqa5Qx8-0)<br/>
구글 드라이브 : [바로가기](https://drive.google.com/drive/folders/1HEQZBS5Rmv1d3auvNwitzJXLWd1yvfnH)
