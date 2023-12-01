## 프로젝트 개요

Mbti문제를 사용자가 쉽게 만들고 공유하는 목적으로 만든 웹 사이트

프로젝트는 [개인노션](https://jwjb1020.notion.site/Mbti-e66a3a109fd049619685b3c9e4ee2fd8?pvs=4)을 이용하여 체계적으로 만들도록 노력함.

## 날짜별 작업 현황
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


