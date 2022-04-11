# React를 이용한 SPA Blog Project

#### 사용 라이브러리

`react`,`react-dom`,`react-router-dom`,`styled-components`, `redux`, `react-redux`, `redux-actions`, `immer`, `redux-devtools-extension`, `axios`, `redux-saga`, `quill`

#### Page

- LoginPage.js - 로그인 - `'/login'`
- RegisterPage.js - 회원가입 - `'/register'`
- WritePage.js - 글쓰기 - `'/write'`
- PostPage.js - 포스트 읽기 - `'/@:username/:postId'`
- PostListPage.js - 포스트 목록 - `['/@:username', '/']`

#### UI

- 최상위 컴포넌트에 이름 뒤에 Block 이라는 단어 사용 예정

##### Auth

- **AuthForm** : 회원가입 또는 로그인 폼을 보여줌
- **AuthTemplate** : 회원가입/로그인 페이지의 레이아웃을 담당

- AuthForm에서 type으로 받아온 props를 확인하여 해당 페이지가 로그인인지 회원가입인지 구분
- initializeForm 액션 생성함수를 호출하여 맨 처음 렌더링 후 form이 초기화 되도록 설정
- redux-saga를 통해 쉽게 API 요청을 할 수 있도록 loading, createRequestSaga 유틸 함수 설정

##### 프록시 설정

- CORS(Cross Origin Request)오류
- 네트워크 요청을 할 때 주소가 다른 경우에 발생
- 다른 주소에서도 API를 호출할 수 있도록 서버쪽 코드를 수정해줘야함
- 이번 프로젝트에서는 같은 호스트에서 제공할 예정이기 때문에 이러한 설정은 하지 않을 예정
- 'package.json'파일 아래에 proxy 코드 작성

### 글쓰기 기능 구현하기

> quill 라는 에디터 라이브러리 사용

1. 에디터 UI 구현
2. 에디터 하단 UI 구현
3. 리덕스로 글쓰기 상태 관리
4. API 연동

### 포스트 읽기 페이지 구현하기

1. 포스트 읽기 ui 준비
   - [포스트제목, 태그, 작성자계정명, 제목, 작성된 시간, 내용]
2. 포스트 읽기 api 연동
3. 포스트 목록 ui 준비
4. 포스트 목록 api 연동
5. html 필터링
6. 페이지네이션 구현
