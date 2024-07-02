

# 🎬 영화추천 사이트 (TMDB API)

OPEN TMDB API를 활용한 영화, TV 프로그램을 간단하게 볼 수 있는 웹페이지입니다. 이 사이트는 `Axios`를 사용해 인기, 평점, 장르를 기준으로 영화와 TV 프로그램에 대한 정보를 얻을 수 있고 `Express와` `Node.js`, `MongoDB`를 활용한 로그인 및 회원가입 기능이 있습니다.

`React`, `Axios`, `Redux`, `React-query` 및 기타 최신 라이브러리를 활용하여 원활하고 효율적인 사용자 경험을 제공하기 위해 노력했습니다. 
프론트는 `Vercel`, 백엔드 서버는 `Heroku`를 사용해 배포했습니다.

<br>
<br>


## 🚀 Demo 링크, 백엔드 코드 링크
https://movie-mate0.vercel.app/ <br>
https://github.com/kyuseok1/movie-server
<br>
<br>

## 🕰️ 제작 기간 & 참여 인원
- **제작 기간**: 2024년 11월 1일 - 2024년 5월 4일
- **참여 인원**: 1명

<br>
<br>

## 🛠️ 기술 스택

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![React Query](https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Node.js](https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/mongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white)
![Heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)


<br>
<br>


## 📈 React Version

| dependencies       | version |
| ------------------ | ------- |
| react              | ^18.2.0 |
| axios              | ^1.6.0  |
| react-router-dom   | ^6.16.0 |
| react-query        | ^3.39.3 |
| redux              | ^4.2.1  |

<br>
<br>
<br>




# Features

## 1. 인기순, 평점순, 장르별 보기
- **상태 관리와 데이터 가져오기**: `useEffect`와 `useState`를 사용하여 현재 페이지와 선택된 장르를 상태로 관리합니다. 예를 들어, 사용자가 특정 장르를 선택하거나 페이지를 변경할 때마다 상태가 업데이트되고, 이에 따라 API 요청이 다시 이루어집니다.
- **Axios 사용**: Open API에서 데이터를 가져오기 위해 axios 라이브러리를 사용합니다. axios는 HTTP 요청을 관리하는 데 편리한 메서드를 제공하여 코드의 가독성과 유지보수성을 높여줍니다. 이를 통해 영화나 TV 프로그램의 인기순, 평점순, 장르별 목록을 쉽게 가져올 수 있습니다.

## 2. 무한 스크롤
- **react-intersection-observer 라이브러리**: 이 라이브러리를 사용하여 무한 스크롤 기능을 구현했습니다. 사용자가 페이지를 스크롤하여 하단에 도달하면 자동으로 새로운 데이터를 가져와 화면에 추가합니다.
- **가시성 감지**: `react-intersection-observer`는 특정 요소가 뷰포트 내에 있는지를 감지하여 데이터 로딩을 트리거합니다. 이를 통해 성능을 최적화하고 불필요한 데이터 로딩을 방지할 수 있습니다.

## 3. 영화, TV 검색 기능
- **onChange 이벤트**: 검색 입력란에서 `onChange` 이벤트를 사용하여 사용자가 입력을 마쳤을 때 검색어에 해당하는 데이터를 가져옵니다. 이는 입력 필드에 포커스가 벗어났을 때(`onBlur`) 또는 사용자가 엔터키를 눌렀을 때 검색 요청을 트리거할 수 있습니다.
- **검색 결과 표시**: 검색 결과는 상태로 관리되며, API 응답을 받아 화면에 즉시 표시됩니다. 이를 통해 사용자는 원하는 영화나 TV 프로그램을 쉽게 찾을 수 있습니다.

## 4. 북마크
- **Redux와 redux-persist 사용**: 즐겨찾기 상태는 Redux를 사용하여 전역적으로 관리됩니다. Redux는 애플리케이션 상태를 예측 가능하게 만드는 데 도움을 줍니다. `redux-persist`를 사용하여 즐겨찾기 상태를 로컬 스토리지에 저장합니다. 이렇게 하면 페이지를 새로고침하거나 다른 페이지로 이동해도 즐겨찾기 목록이 유지됩니다. 이는 사용자 경험을 향상시키고 데이터 지속성을 보장합니다.

## 5. 페이지네이션
- **상태 관리**: `useEffect`와 `useState`를 사용하여 페이지네이션 기능을 구현했습니다. 현재 페이지 번호를 상태로 관리하며, 페이지 번호가 변경될 때마다 새로운 데이터를 가져옵니다.
- **API 요청**: 페이지네이션을 통해 특정 페이지의 데이터를 요청할 때마다 API 호출이 이루어집니다. 이는 대량의 데이터를 한 번에 로드하는 대신, 필요한 부분만 로드하여 성능을 최적화합니다.

## 6. Top 버튼
- **window.scrollTo 사용**: `window.scrollTo` 메서드를 사용하여 페이지 맨 위로 스크롤하는 기능을 구현했습니다. 이 버튼을 클릭하면 부드럽게 페이지 상단으로 이동하여 사용자가 다시 탐색을 시작할 수 있도록 합니다.
- **UX 향상**: Top 버튼은 긴 페이지에서 사용자 경험을 향상시키는 요소로, 사용자가 빠르게 맨 위로 돌아갈 수 있게 합니다. 이를 통해 페이지 내 탐색이 편리해집니다.

## 7. 리액트 쿼리
- **리액트 쿼리 사용**: 데이터 페칭, 캐싱, 동기화, 서버 상태 업데이트와 관련된 작업을 간편하게 관리하기 위해 `react-query`를 사용했습니다. 이는 서버 상태를 관리하는 데 매우 유용하며, API 요청을 훨씬 더 간결하고 효율적으로 처리할 수 있게 해줍니다.

## 8. UseCallback
- **useCallback 사용**: `useCallback` 훅을 사용하여 메모이제이션된 콜백 함수를 생성했습니다. 동일한 함수가 재생성되는 것을 방지하여 성능을 최적화했고, 특히, 컴포넌트의 렌더링 성능을 최적화하거나, 자식 컴포넌트에 콜백 함수를 props로 전달할 때 유용합니다.
- **성능 최적화**: `useCallback`을 사용하여 함수가 종속성 배열에 있는 값이 변경될 때만 재생성되도록 하여 불필요한 렌더링을 줄였습니다. 이를 통해 컴포넌트의 렌더링 성능을 최적화하고, 애플리케이션이 더 빠르고 응답성이 좋게 동작하도록 했습니다.

## 9. 로그인, 회원가입
- **Express, Node, MongoDB 사용**: `Express와` `Node.js`를 활용하여 로그인 및 회원가입 기능을 구현했습니다. `MongoDB`를 데이터베이스로 사용하여 사용자 정보를 안전하게 저장하고 관리했습니다.
- **JWT 토큰 인증**: `JSON Web Token` (JWT)을 사용하여 사용자 인증 및 권한 부여를 구현했습니다. 로그인 시 JWT를 발급하고, 이를 통해 사용자 세션을 관리하여 보안을 강화했습니다.
- **비밀번호 해싱**: `bcrypt` 라이브러리를 사용하여 사용자 비밀번호를 해싱하여 저장함으로써 보안성을 높였습니다. 이를 통해 데이터베이스에 저장된 비밀번호가 안전하게 보호되도록 했습니다.
- **에러 처리**: 다양한 에러 상황에 대비하여 적절한 에러 메시지를 반환하고, 사용자에게 이해하기 쉬운 피드백을 제공하여 애플리케이션의 신뢰성을 높였습니다.


<br>
<br>


## 스크린샷
<br>
<br>

| 홈 | 상세 | 검색 | 리스트  | 
| --- | --- | --- | --- |
| ![스크린샷(17)](https://github.com/kyuseok1/movie_site/assets/88577791/3cc89e2b-2003-453d-a6ca-c336d86cd2c1)| ![스크린샷(22)](https://github.com/kyuseok1/movie_site/assets/88577791/9ddd9fc2-b24c-46a7-aeb6-844325487108)| ![스크린샷(21)](https://github.com/kyuseok1/movie_site/assets/88577791/369d098b-8b78-474f-9561-fc387da018e8) | ![스크린샷(20)](https://github.com/kyuseok1/movie_site/assets/88577791/73964794-4eeb-4d67-90b9-22bb7564ce41)   | 
|![스크린샷(18)](https://github.com/kyuseok1/movie_site/assets/88577791/d3d429e1-c728-426f-9d28-a6ee947006f6) |![스크린샷(23)](https://github.com/kyuseok1/movie_site/assets/88577791/b9406b3a-b429-4edf-954f-4578b1aab720) |  |![스크린샷(24)](https://github.com/kyuseok1/movie_site/assets/88577791/c728bbe3-0e95-4f03-a5f3-fd2fbdc00488) | 
|![스크린샷(19)](https://github.com/kyuseok1/movie_site/assets/88577791/3194fa87-7f92-4994-9da4-5c3d9ddcd47f) |

<br>
<br>



## 🛠️ 트러블 슈팅 요약

### 1. Axios API 데이터 관련 문제
- **문제**: Axios를 사용하여 데이터를 가져올 때, 데이터 로드 전에 구성 요소가 렌더링되어 빈 화면이 나타남.
- **해결**: `useState`와 `useEffect`를 사용하여 로딩 상태를 관리. 초기 로딩 시 로딩 화면 표시, 데이터 로드 후 로딩 상태를 `false`로 변경.

### 2. useEffect 무한 루프 문제
- **문제**: `useEffect`가 의도하지 않은 무한 루프에 빠짐.
- **해결**: `useEffect`의 종속성 배열을 정확히 설정. 필요한 경우 빈 배열을 설정하여 컴포넌트 마운트 시 한 번만 실행되도록 함.

### 3. 무한 스크롤 새로운 데이터 로드 문제
- **문제**: 무한 스크롤 기능이 올바르게 작동하지 않음.
- **해결**: `react-intersection-observer`를 사용하여 요소가 뷰포트에 들어올 때마다 새로운 데이터를 요청하고 화면에 표시.

### 4. 페이지 최적화 (useCallback 등)
- **문제**: API 데이터 로드와 렌더링 시간이 오래 걸림.
- **해결**:
  - **`useCallback` 사용**: 콜백 함수 메모이제이션으로 불필요한 렌더링 방지.
  - **로딩 상태 처리**: 단순화 및 에러 처리 추가.
  - **모듈화**: 코드를 모듈화하여 유지보수성 향상.
  - **`React Query` 사용**: 데이터 페칭 최적화 및 성능 개선.


 <br>
<br> 
  
## 📌 회고 / 느낀 점

이번 프로젝트를 통해 다양한 기술과 개념을 학습하고 적용하는 귀중한 경험을 했습니다. 특히 페이지 최적화 작업을 통해 사용자 경험을 크게 향상시킬 수 있음을 깨달았고, 불필요한 리렌더링 최소화 등의 방법을 적용해 성능이 개선되는 것을 직접 확인했습니다. `Lighthouse`와 같은 도구를 사용해 성능을 측정하고 개선하는 방법도 배워, 미약하지만 성능 향상을 이뤄냈습니다.

비동기 처리의 중요성을 다시금 느끼며, `async`/`await` 구문을 활용해 가독성이 높은 코드를 작성하는법을 배웠고, 이를 통해 데이터 로딩과 에러 핸들링을 효과적으로 구현함으로써, 더 나은 사용자 경험을 제공할 수 있었습니다. 비동기 처리를 통해 필요한 순간에만 필요한 코드가 로드되도록 하여 전체적인 성능을 향상시켰습니다.

또한, `useEffect` 훅을 통해 리액트 컴포넌트의 라이프사이클을 관리하는 데 많은 도움을 받았습니다. 컴포넌트가 마운트될 때와 언마운트될 때 실행되는 코드를 작성함으로써 리소스를 효율적으로 관리할 수 있었습니다. 의존성 배열을 통해 특정 상태나 props가 변경될 때만 `useEffect` 훅이 실행되도록 최적화하여 불필요한 리렌더링을 줄임으로써, 성능 개선과 코드 유지보수성을 동시에 향상시킬 수 있었습니다.

이러한 경험을 통해 페이지 최적화, 비동기 처리, `useEffect` 훅의 중요성을 깊이 이해하게 되었고, 각각의 기술이 가지는 강점을 최대한 활용해 보다 나은 성능과 사용자 경험을 제공하는 웹 애플리케이션을 개발할 수 있음을 깨달았습니다. 앞으로도 이러한 기술들을 지속적으로 학습하고 발전시켜 나가며, 더욱 효율적이고 사용자 친화적인 웹 애플리케이션을 만들고자 합니다.



















