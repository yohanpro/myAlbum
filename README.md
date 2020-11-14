## 프로젝트 실행 가이드

1. git clone ( or Download Zip)

```bash
$ git clone git@github.com:yohanpro/myAlbum.git
```

2. npm install

```bash
$ npm i
```

3. 실행하기 : `기본포트 3000`

- 개발 모드 (development)

```bash
$ npm run dev
```

- production 모드

```bash
$ npm run build
$ npm run start
```

<hr>

## 프로젝트 구조

```
.
+-- actions
|   +-- album.js
|   +-- index.js
+-- componenets
|   +-- Album
|       +-- index.js
|   +-- Layout
|       +-- albumLayout.js
|   +-- Modal
|       +-- deleteModal.js
|   +-- Pagination
|       +-- index.js
|   +-- dummyData
|       +-- dummyAccounts.js
+-- pages
|   +-- album
|       +-- [id].js
|       +-- new.js
|       +-- index.js
|   +-- _app.js
|   +-- _document.js
|   +-- index.js
+-- styles
|   +-- _base.scss
|   +-- _layout.scss
|   +-- main.scss
+-- jsconfig.json
+-- package.json

```

- `actions`: 앨범 CRUD 및 로그인 API 함수 위치
- `components` : Album, Pagination, Modal 컴포넌트 위치
- `dummyData` : Dummy Email, password 데이터
- `pages/_app.js`: 공통 css 및 스크립트를 적용하기 위하여 nextjs에 제공하는 파일
- `pages/_document.js`: 공통 head, css 등을 적용하기 위하여 nextjs에 제공하는 파일
- `styles`: scss 파일 위치 (글로벌 scss 설정)
- `jsconfig.json`: 파일경로를 단순화하기 위한 설정파일(ex '../../components'-> 'components')

<hr>
<br>

## `Next.js` 사용

사용 이유 : 자동 Bundle, SSR 기능 제공, 간편한 코드 스플리팅 기능 제공

## `Material-ui` 사용

사용 이유 : 시멘틱 html 태그 생성, 반응형 레이아웃, UI, UX를 고려한 기본 기능 탑재

## 구현과정 설명

1. 필요 기능 정리, 화면 및 페이지 정리

- login, album, album 생성, album 수정 페이지 필요
- Album은 추가 확장될 가능성을 염두에 두어 수정과 생성 페이지 분리

2. 로그인 기능 구현 (JWT)

- 실제 서비스에선 암호화된 Password를 서버에서 받아 DB에서 조회, 결과를 반환해야 하나, 프론트엔드 과제임을 고려하여 생성, 반환까지만 구현
- 받은 토큰을 localstorage에 저장
- 자동 로그인 기능 : 루트 도메인으로 접근 시, localstorage에서 토큰값 유효 조회, 유효할 시 `/album`으로 이동
  로그아웃 시 localstorage에서 토큰 삭제

3. Album 페이지 구현

- 서버사이드 렌더링(`getStaticProps`)으로 구현되어 미리 빌드된 페이지 생성하여 빠른 렌더링 구현
- Pagination: Material-ui에서 제공하는 페이지네이션 기능 사용

4. Album CRUD (jsonplaceholder)

- create : 앨범추가하기 눌러 new에서 사용
- update : 앨범 컴포넌트 안 수정 버튼 눌러서 사용
- delete : 앨범 컴포넌트 안 삭제 버튼

##
