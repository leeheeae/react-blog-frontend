# React를 이용한 SPA Blog Project

#### 사용 라이브러리

`react`,`react-dom`,`react-router-dom`,`styled-components`, `redux`, `react-redux`, `redux-actions`, `immer`, `redux-devtools-extension`

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
