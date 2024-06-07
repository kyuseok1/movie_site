

# 🎬 영화추천 사이트 (TMDB API)

OPEN TMDB API를 활용한 영화, TV 프로그램을 간단하게 추천받을 수 있는 웹페이지입니다. 이 사이트는 인기, 평점, 장르를 기준으로 영화와 TV 프로그램에 대한 정보를 얻을 수 있고 검색할 수 있는 포괄적인 플랫폼을 제공합니다.

`React`, `Axios`, `Redux`, `React-query` 및 기타 최신 라이브러리를 활용하여 원활하고 효율적인 사용자 경험을 제공하기 위해 노력했습니다. 
프론트는 `Vercel`, 백엔드 서버는 `Heroku`를 사용해 배포했습니다.

[![Movie Site](https://img.shields.io/badge/Visit_Movie_Site-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://movie-mate0.vercel.app/)
<br>
https://movie-mate0.vercel.app/
<br>
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




| 홈 | 상세 | 검색 | 리스트  | 
| --- | --- | --- | --- |
| ![스크린샷(17)](https://github.com/kyuseok1/movie_site/assets/88577791/3cc89e2b-2003-453d-a6ca-c336d86cd2c1)| ![스크린샷(22)](https://github.com/kyuseok1/movie_site/assets/88577791/9ddd9fc2-b24c-46a7-aeb6-844325487108)| ![스크린샷(21)](https://github.com/kyuseok1/movie_site/assets/88577791/369d098b-8b78-474f-9561-fc387da018e8) | ![스크린샷(20)](https://github.com/kyuseok1/movie_site/assets/88577791/73964794-4eeb-4d67-90b9-22bb7564ce41)   | 
|![스크린샷(18)](https://github.com/kyuseok1/movie_site/assets/88577791/d3d429e1-c728-426f-9d28-a6ee947006f6) |![스크린샷(23)](https://github.com/kyuseok1/movie_site/assets/88577791/b9406b3a-b429-4edf-954f-4578b1aab720) |  |![스크린샷(24)](https://github.com/kyuseok1/movie_site/assets/88577791/c728bbe3-0e95-4f03-a5f3-fd2fbdc00488) | 
|![스크린샷(19)](https://github.com/kyuseok1/movie_site/assets/88577791/3194fa87-7f92-4994-9da4-5c3d9ddcd47f) |

<br>
<br>



## 트러블 슈팅

### 1. Axios API 데이터 관련 문제
**문제 배경**:
Axios를 사용하여 서버에서 데이터를 가져올 때, 데이터가 완전히 로드되기 전에 구성 요소가 렌더링되는 문제가 발생했습니다. 이는 Axios가 비동기적으로 데이터를 가져오기 때문에, 데이터가 로드되기 전에 구성 요소가 초기 상태로 렌더링되어 빈 화면이 표시되거나, 로딩 중이라는 메시지가 나타나는 상황이 발생했습니다. 이러한 문제는 사용자 경험을 저하시킬 수 있으며, 특히 대용량 데이터를 처리할 때 페이지가 비어 보이는 현상이 발생했습니다.

**해결 방법**:
이 문제를 해결하기 위해 `useState`와 `useEffect`를 사용하여 로딩 상태를 관리했습니다. 먼저, 컴포넌트가 마운트될 때 로딩 상태를 true로 설정하여 초기 렌더링 시 로딩 화면을 표시합니다. Axios를 사용하여 데이터를 요청하고, 데이터를 성공적으로 받아온 후, then 블록에서 로딩 상태를 false로 변경합니다. 이로 인해 데이터가 완전히 로드될 때까지 로딩 화면이 표시되며, 데이터가 로드되면 실제 데이터를 기반으로 구성 요소가 다시 렌더링됩니다. 이러한 접근 방식을 통해 사용자에게 데이터 로딩 상태를 명확히 전달할 수 있으며, 데이터가 준비되지 않은 상태에서 구성 요소가 잘못 렌더링되는 문제를 방지할 수 있습니다.

### 2. UseEffect 무한 루프 문제
**문제 배경**:
`useState`를 사용하여 상태를 관리하는 동안 `useEffect`가 의도하지 않은 무한 루프에 빠지는 문제가 발생했습니다. 이는 `useEffect`의 종속성 배열이 제대로 설정되지 않아 발생한 문제로, 의존성 배열이 변경될 때마다 `useEffect`가 반복적으로 실행되면서 무한 루프가 발생했습니다. 이러한 문제는 성능 저하를 유발할 뿐만 아니라, 페이지가 정상적으로 동작하지 않았습니다.

**해결 방법**:
이 문제를 해결하기 위해 `useEffect`의 종속성 배열을 올바르게 설정했습니다. 종속성 배열에 상태 값이나 함수 등을 명확하게 지정하여, 의존성이 변경될 때만 `useEffect`가 실행되도록 했습니다. 또한, 특정 효과가 한 번만 실행되도록 해야 할 경우, 빈 배열을 종속성 배열로 설정하여 컴포넌트가 마운트될 때만 `useEffect`가 실행되도록 했습니다. 필요에 따라 조건문을 추가하여 특정 조건이 충족될 때만 효과가 실행되도록 함으로써 불필요한 반복 실행을 방지했습니다.

### 3. 무한 스크롤 새로운 데이터 로드 문제
**문제 배경**:
사용자가 페이지 끝에 도달했을 때 새로운 데이터를 로드하는 기능이 올바르게 작동하지 않았습니다. 이는 무한 스크롤 기능이 제대로 구현되지 않아, 사용자가 페이지 끝까지 스크롤해도 새로운 콘텐츠가 로드되지 않거나, 데이터 로드가 지연되어 사용자 경험이 저하되는 문제를 일으켰습니다.

**해결 방법**:
무한 스크롤 기능을 구현하기 위해 `react-intersection-observer` 라이브러리를 사용했습니다. 이 라이브러리는 특정 요소가 뷰포트 내에 들어올 때 이를 감지하여 데이터 로드를 트리거할 수 있습니다. `useEffect`와 함께 사용하여 요소가 뷰포트 내에 들어올 때마다 새로운 데이터를 요청하고, 데이터를 받아온 후 기존 데이터에 추가하여 화면에 표시했습니다. 이를 통해 사용자가 페이지 끝에 도달할 때마다 새로운 콘텐츠가 원활하게 로드되도록 하여 무한 스크롤 기능을 안정적으로 구현할 수 있었습니다.

### 4. UseCallback 등을 통한 페이지 최적화
**문제 배경**:
API 등에서 데이터를 받아오고 페이지를 렌더링하는 데 시간이 오래 걸리고, 성능 저하가 발생하여 페이지가 버벅거리는 문제가 발생했습니다. 이는 반복적인 렌더링과 불필요한 상태 업데이트로 인한 성능 저하 때문이었습니다. 특히, 콜백 함수가 자주 재생성되면서 자식 컴포넌트에 불필요하게 전달되는 문제가 있었습니다.

**해결 방법**:
1. **useCallback 사용**: `toggleHandler` 및 `handlePageClick`과 같은 기능에 `useCallback`을 사용하여 메모이제이션된 콜백 함수를 생성했습니다. 이를 통해 동일한 함수가 재생성되는 것을 방지하고, 자식 컴포넌트에 전달되는 콜백 함수가 변경되지 않도록 하여 불필요한 렌더링을 줄였습니다.
   
2. **로딩 상태 처리**: 로딩 상태를 단순화하고, 데이터를 불러오는 동안 사용자에게 로딩 상태를 명확히 전달했습니다. 또한, 데이터 불러오기 실패 시 적절한 에러 처리를 추가하여 사용자 경험을 개선했습니다.

3. **모듈화**: 장르 탐색 렌더링을 모듈식으로 만들고 유지 관리하기 쉽게 하기 위해 배열을 활용하여 코드를 정리했습니다. 이를 통해 코드의 가독성과 유지보수성을 높였습니다.

4. **React Query 사용**: 데이터 가져오기를 최적화하기 위해 `react-query` 라이브러리를 사용했습니다. 이 라이브러리는 데이터 페칭, 캐싱, 동기화, 서버 상태 업데이트를 간편하게 관리할 수 있게 해주며, API 요청을 더 간결하고 효율적으로 처리할 수 있게 해줍니다. `react-query`를 사용함으로써 데이터 페칭 로직을 간소화하고, 중복되는 요청을 방지하여 성능을 최적화했습니다.

 




 <br>
<br> <br>
<br>
  







