## 프로젝트 개요

Mbti문제를 사용자가 쉽게 만들고 공유하는 목적으로 만든 웹 사이트

프로젝트는 [개인노션](https://jwjb1020.notion.site/Mbti-e66a3a109fd049619685b3c9e4ee2fd8?pvs=4)을 이용하여 체계적으로 만들도록 노력함.

## 날짜별 작업 현황
-2023.12.25
> middleware
  - jwt.verify() 함수로 가지고 올 수 없었던 jwt token 정보를 jwt.decoded() 함수로 가지고 와서 처리함
    - verify() 함수는 유효성을 검사하는 함수로 주로 서버 측에서 사용하기 때문에 에러가 난 것으로 보고 있음, 유효성 검사는 서버 단에서 하는 것이 좋음
    - decode() 함수를 사용하면 클라이언트 측에서 토큰의 유효성 검사는 하지 않고 디코딩만 가능하게 해줌
    - middleware의 경우 서버 측이라고 알고 있는데 왜 유효성 검사가 되지 않고 Next.js의 edge runtime에서 'crypto' 모듈이 지원되지 않는 건지 잘 모르겠음
-2023.12.22
  > front
  - 'deleteButtone' 컴포넌트 swith-case문 사용해서 컴포넌트 재사용이 가능하도록 함
- 2023.12.17
  팀원 코드 pull & request
  > db
    - 팀원이 만든 자유게시판 데이터테이블 임포트함

  > back
    - mbtitype 에서 questionId 가져오는 api 로직 추가
    - 비회원도 db에서 연결해서 리스트 보여지게 하도록 수정
    - .env파일에 SECRET_KEY 추가
    - 문제 만들때 현재 questionId 쿠키에 넣게 수정
  
  > front
    - router 써서 mbti특성까지 완료하면 문제풀기로 넘어가도록 함
    - 수정/삭제 버튼 컴포넌트 만듬
    - 컴포넌트 폴더 대문자로 바꿈
    - 로그인 된 유저 번호에 따라 수정/삭제 버튼 보이게 함
- 2023.12.13
  팀원(박수현)이 개발한 자유게시판 기능 pull & request함

  > db
   - mbti_type에 16개의 타입에 해당되는 특징들 넣는 컬럼 추가

  > back
   - mbti 타입별 특징을 저장하는 api 추가 : /api/testsheet/create/mbtitype
  
  > front
   - 특징 저장하는 컴포넌트, 문제 풀이 시작버튼 추가
   - mbti에 해당하는 값입력하는 페이지 추가
  

- 2023.12.11 
  프로젝트 참여자 한명(박수현) 추가

  > db 
   - questionDetail 테이블에 mbtiType1, mbtiType2 컬럼 추가
  
  > back
   - api 폴더 정리
   - /api/testsheet/create/question , /api/testsheet/create/title
   - /api/testsheet/show 추가(만들어진 문제 보여주는 기능)

  > front
   - 문제 디테일 만드는 페이지 추가
   - mbti 유형별 답변 추가
   - 문제가 완성되면 홈으로 이동

- 2023.12.10
  > db - 변경사항 없음

  > back
   - 문제 디테일 넣는 /api/question 수정 완료
   - 전체적인 코드 정리
  
  > front
   - useSearchParams 훅을 이용하여 url에서 회원아이디 현제 만들고 있는 문제 번호 가지고 옴
   - post로 데이터 보내고 받는 코드 생성

- 2023.12.08
  > db
   - question table에 섬네일 추가
   - answer table 이름 questionDetail로 변경

  > back 
   - 회원가입 error 코드 생성
   - /api/question 코드 수정 중
  
  > front
   - 회원가입 form 태그 속성 action -> onSubmit으로 변경
   - /create/make 페이지  css 추가

- 2023.12.07
  > db - 변경사항 없음

  > back
   - 문제만드는 api 수정 중

  > front
   - 로그인 후 바뀌지 않는 문제 해결해야함. 
    - setTime을 써서 문제 해결


- 2023.12.06
  > db - 변경사항 없음

  > back 
   - 문제를 만드는 api 코드 진행중
   - 로그인 코드에 jwt 토큰을 만들어서 헤더 쿠키에 내보내는 api 완성
   - nookies 라는 패키지를 사용해 로그아웃할때 쿠키에 있는 jwt 삭제 기능 완성

  > front
   - 1. 문제 만드는 페이지 작성중
   - 1 작성중 title을 먼저 넣어야해서 그 페이지도 만듬


- 2023.12.03
  > db - 아직유지

  > back 
   - 로그인, 회원가입에 대한 api 생성
   - 회원가입 할 때 비밀번호 암호화 해서 db에 넣음
   - 역할과 가입시간 추가해서 넣는 코드 생성

  > front
   - 로그인 회원가입으로 가는 버튼 각각 구분함
   - 로그인 회원가입 페이지 폼태그 사용해서 만듬
   - 폼태그에 tailwind로 css 입힘 

- 2023.12.02
  > db - user 테이블에 더미 데이터 추가

  > front - navbar에 css 설정완료
   - font 추가함 css 파일에있음
   - 로고 피그마로 만들어서 public에 추가함
   - navbar 아이템들 가운데 정렬로 이쁘게 만듬
  
- 2023.12.01
  > git commit 메세지 통일하기로 맘먹음 <br>
  - Feat : 새로운 기능 추가
  - Docs : 문서 수정
  - Fix : 버그 수정
  - Test : 테스트 코드
  - Design : css 등 사용자 ui 디자인 변경
  - Rename : 파일 혹은 폴더명을 수정하거나 옮기는 작업만 한 경우
  - Remove : 파일을 삭제하는 작업만 수행한 경우
  - Build : 빌드 관련 파일 수정
  > db 
  - mysql에 테이블을 데이터에 맞게 만듬

  > front 
  - navbar 컨포넌트로 만들고 각각에 대한 링크 담.
  - 링크에 대해서 예시 페이지를 단어로 적음.




- 2023.11.30
  - 기본적인 뼈대를 잡고 혼자 계획을 세움<br>
  - 기본적으로 next.js로 프론트와 백 전부 구성할 것임<br>
  - 먼저 터미널에 npx create-next-app@latest 로 프로젝트를 하나 만들고 초기화를 시킴<br>
  - db에 접근 가능할 수 있도록 함수 만들고 .env를 사용해서 환경변수 생성<br>
  - test 코드로 잘 연결되는 지 확인하기 위해 jest라는 라이브러리 인스톨함 [jest library](https://nextjs.org/docs/pages/building-your-application/optimizing/testing#jest-and-react-testing-library)<br>
  - 자꾸 punny 에러 나와서 node 버전 lts 버전 중 20.9.0으로 다운그레이드함.


