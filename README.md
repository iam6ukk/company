## Company (기업 페이지)

#### 📌 프로젝트 소개

홈페이지의 레이아웃과 반응형을 공부하기 위해 제작한 페이지입니다.  
미디어 쿼리를 사용해 PC, 태블릿, 모바일 규격에 맞추어 반응형을 구현했습니다.  
데모 사이트 : https://sparkly-nasturtium-bc497d.netlify.app/

`인터랙티브 웹 페이지 만들기` 교재의 기업 홈페이지 코드를 참고하였으며, 내용을 추가했습니다.  
<br/>

#### 📅 개발 기간

- 2024년 1월 18일 ~ 2024년 2월 1일  
  <br/>

#### ⚙️ 사용 기술

- HTML
- CSS
- JavaScript  
  <br/>

#### 📑 프로젝트 상세

1. PC (최대 1327px)

   **Main**

   ![company_pc_home](https://github.com/iam6ukk/company/assets/84495331/f7965d4b-dae8-43a2-b174-ff81f9d96188)  
   기업 페이지의 첫 화면입니다.  
   상단의 좌측엔 로고, 우측엔 네비게이션 메뉴를 배치했습니다.
   또한, 백그라운드에 영상을 반복 재생될 수 있도록 했습니다.

   <br/>

   ![company_pc_header](https://github.com/iam6ukk/company/assets/84495331/6559eea1-0bd9-41c1-89c2-60bbe7ea395d)
   우측 네비게이션 메뉴에서는 각 메뉴에 커서를 올려두었을 때, 배경색을 적용하여 호버 효과를 적용해주었습니다.

   <br/>

   **Recnet News**

   ![company_pc_news](https://github.com/iam6ukk/company/assets/84495331/53e36622-3cd4-4bf5-b1ac-f127a75a3ef4)
   스크롤을 내렸을 때도 헤더 영역이 보여질 수 있도록 position을 fixed 해주었습니다.  
   뉴스들은 박스 형태로 만들어 사진과 제목, 내용을 구분할 수 있게 넣어주었고 버튼 또한 호버 효과를 적용해주었습니다.
   디스플레이 크기에 따라 자동으로 줄바꿈 처리를 해주기 위해 flex-wrap: wrap을 사용했습니다.

   <br/>

   **Contact**

   ![company_pc_contact](https://github.com/iam6ukk/company/assets/84495331/5ca4907f-9317-41ea-a08d-119e4898aa6d)
   문의사항을 작성할 수 있는 폼 영역입니다.  
   흰 배경이 계속 보여지면 홈 페이지가 심심해 보일 수 있어 배경에 이미지를 넣어주었습니다.

   <br/>

   **Footer**

   ![company_pc_footer](https://github.com/iam6ukk/company/assets/84495331/4584d19a-40e1-4976-957e-f377f8c11172)
   푸터 영역에는 기업명과 메뉴, 주소와 카피라이터를 넣었습니다.
   전체적인 색상을 어두운 색으로 맞추어 기업의 정적인 이미지를 줄 수 있도록 했습니다.

   <br/>

2. 태블릿 (최대 1040px)

   **Main**

   ![company_tablet_home](https://github.com/iam6ukk/company/assets/84495331/15956470-3510-4c59-adda-2ff87374c5e9)
   태블릿에서의 홈 화면입니다.  
   PC의 네비게이션 메뉴는 display: none을 주었고 메뉴 아이콘을 배치하였습니다.

   <br/>

   ![company_tablet_header](https://github.com/iam6ukk/company/assets/84495331/cfa9292b-37ed-4614-880e-c7ed52d14b2e)
   아이콘을 눌렀을 때, 클래스를 추가해 네비게이션 메뉴를 보여줄 수 있도록 기능을 구현했습니다.  
   또한, 아이콘의 색상을 흰색으로 바꾸어 네비게이션 메뉴가 활성화 되었음을 보여줍니다.

   <br/>

   **Contact**

   ![company_tablet_contact](https://github.com/iam6ukk/company/assets/84495331/198dfe6e-83f2-44c0-8f34-b45b09ca1dfe)
   폼 영역은 디스플레이 크기에 맞춰 제목과 폼 박스가 가운데로 정렬될 수 있도록 했습니다.

   <br/>

3. 모바일 (최대 520px)

   **Main**

   ![company_mobile_home](https://github.com/iam6ukk/company/assets/84495331/bb67cd6c-76b1-4cf8-b024-03b8358484f9)  
   모바일에서의 홈 화면은 내용에 해당하는 부분들을 가운데로 배치했습니다.

 <br/>

#### 🧑‍💻 회고

웹 퍼블리싱을 공부하면서 반응형이 필수적으로 사용됨을 느꼈고 실제로 구현해보면서 공부하고자 시작한 프로젝트였습니다.  
처음 CSS를 적용했을 때, px로 고정값을 주어서 반응형을 적용하는데에 어려움이 있었습니다. 이를 해결하고자 반응형 웹 페이지와 단위에 대해 더 찾아보고 타 사이트의 코드를 참고하면서 이해해 나갔고 미디어 쿼리를 조금 더 효율적으로 작성할 수 있었습니다.  
아직 반응형을 구현하는 데에 있어 많이 부족하다고 생각됩니다. 레이아웃, css 효과 등 부족하다고 생각되는 부분을 더 공부하고 다른 프로젝트에서도 반응형을 적용해서 더 발전될 수 있도록 노력하겠습니다.

<br/>

#### 🧩 참조

[반응형 웹 사이트 만들기](https://whales.tistory.com/155)  
[반응형을 위한 css 단위 이해하기](https://designbase.co.kr/webcoding-15/)
