

# 😉 영화추천 사이트



영화를 간단하게 추천받을 수 있는 사이트 입니다. 

<br>
<br>

 `#영화` `#추천` `#빠르고쉽게` `#movie`  



---

<br>

# 📖 Contents

- [😉 EASYME.md](#-easymemd)
- [📖 Contents](#-contents)
- [🌈 Background](#-background)
- [🔗 Link](#-link)
  - [Github Repositories](#github-repositories)
- [🛠 Features](#-features)
- [📈 Release Note](#-release-note)
- [🪃 Skills](#-skills)
  - [Client](#client-1)
  - [Server](#server-1)
- [🪛 Project Control](#-project-control)
- [🧗 Challenges](#-challenges)
  - [1. axios를 통해 josn데이터 받기](#1-axios를-통해-josn데이터-받기)
  - [2. Mongodb/Passport 라이브러리를 이용한 회원가입/로그인 기능 구현](#2-mongodbpassport-라이브러리를-이용한-회원가입로그인-기능-구현)
  - [3. aws를 이용한 프로젝트 배포](#3-aws를-이용한-프로젝트-배포)


<br>

# 🌈 Background
평소에 넷플릭스를 보면서 넷플릭스같은 영화,애니를 추천해주는 사이트를 만들고 싶어서 시작한 프로젝입니다. <br> 
로그인, 회원가입없이 추천받을수 있는 사이트가 있으면 편리할꺼같아 만들게 되었습니다.

<br>

# 🔗 Link

- []


# 🛠 Features
- Screen
    - 상단에는 다양한 메뉴바가 있습니다.
    - 오른쪽 상단에서 회원가입/로그인을 할 수 있습니다.
    - Random 메뉴로 이동시, 상단 버튼을 눌러서 랜덤으로 영화를 추천받을수 있습니다.
    - Random 메뉴 오른쪽에 일일박스오피스 정보를 확인 할 수 있습니다.
    - Genre 메뉴로 이동시, 장르별로 영화를 보여줍니다.

- 로그인 / 회원가입하기
    - 로그인 / 회원가입 버튼을 클릭하면 로그인 / 회원가입 할 수 있는 링크로 이동합니다.
    - ID와 비밀번호를 적고 로그인/회원가입 버튼을 누르면 완료됩니다.
    - 완료되면 홈으로 다시 돌아갑니다.

<br>

# 📈 Release Note
| version | log |
| --- | --- |
| 0.1.0 | 로그인,회원가입 기능과 데이터저장 |
| ~ 0.0.1 | 일일오피스박스 기능 추가 |

<br>

# 🪃 Skills

## Client
- Html
- Javascript
- React
- React Router
- Reacr-bootstrap
- React-redux
  

## Server

- Node.js
- Express
- MongoDB 

<br>

# 🪛 Project Control

- Version Control: Git, Github
- Task Control: Notion

<br>

# 🧗 Challenges

대략 45일 동안 기능 개발을 하면서 겪은 어려움 또는 도전은 아래와 같습니다.

<br>



## 1 axios를 통해 josn데이터 받기

어느정도 구조가 갖춰지고, 다양한 기능을 추가하고싶어서 고민하다가 api를 이용해 일일오피스박스 정보를 알려주는 기능을 만들고 싶었습니다. 찾아보니, ajax, fetch, axios 등 다양한 api호출 방법들이 있었지만 axios로 결정했습니다. fetch처럼 promise를 지원한다는 공통점이 있지만, fetch와는 달리 브라우저 호환성이 좋고 편리하며 댜앙한 기능이 있다는걸 알게 되었습니다.  


axios 라이브러리를 사용하여 http 통신요청하고 JSON 데이터를 받아오는데, data는 array형태입니다. React는 Object그대로를 랜더링하지 못해서 데이터롤 바꿔줘야 한다는걸 알게되었고, 사용할려는 json이 key : value구조가 복잡해서 고생했었지만 JSON.stringify() , JSON.parse() 메서드를 이용해 자유롭게 JSON데이터를 주고받을수 있게 되었습니다.
<br>

## 2 Mongodb/Passport 라이브러리를 이용한 회원가입/로그인 기능 구현


회원가입/로그인 기능을 만들고 싶어서 찾다가, passport라는 라이브를 찾았습니다. 그냥 만들기엔 쉽지않은 Jwt, session 기능등을 복붙식으로 쉽게 구현하도록 도와주는 라이브러리 였습니다.
유저가 아이디 비번을 서버로 보내면 DB에 그걸 저장했습니다. 아이디/비번을 서버로 보내면 DB에 있던거랑 비교해보고 일치하면 세션 document를 만들어 줬습니다. 
로그인성공시 세션만들어주고 유저 브라우저 쿠키에 저장해주는건 passport.serializeUser()라는걸 사용했고, 유저가 쿠키 제출한걸 확인해보는건 passport.deserializeUser()를 사용했습니다. 

<br>


## 3. aws를 이용한 프로젝트 배포

프로젝트를 다 만들었지만 마지막 남은 큰 문제점이 하나 있었습니다. 바로 배포 방법입니다. 여러가지 리액트 배포 방법을 찾다가 aws가 준수한 보안서비스와 공짜로 서버를 제공해줘서 사용하게 되었습니다.

처음에는 복잡하지만 블로그 내용을 그대로 따라하면 금방 될줄 알았습니다. 하지만 ssh란것을 통하여 인스턴스에 접속하는 초반단계부터 막혔습니다. 인터넷에 나와있는 방법을 다 따라하고 오류코드를 검색해도 진전이 없었습니다. 하지만 노트북말고 집에있는 데스크탑으로 접속하니까 다행히 잘 작동했습니다. 

이대로 일사천리로 진행되나 싶었지만, 또다른 문제가 있었습니다. 우분투 인스턴스에 프로젝트에 필요한 패키지들을 설치하고 실행했지만 몽고db 관련된 오류코드가 떴습니다.
오류코드 관련된 내용도 적었지만, 찾다보니 노드js 버전을 낮추면 된다는 말을 듣고 지푸라기 잡는심정으로 바로 따라해봤습니다. 처음보는 리눅스언어라 복잡했지만, 다시 삭제하고 버전을 낮추고 실행하니까 다행히 정상적으로 작동 되었습니다. 그 뒤 서버는 작동하지만 사이트 접속이 안되서 멈칫했지만 인터넷글을 따라해서 금방 해결할수 있었습니다. 

<br><br><br><br>


처음해보는 배포라 우여곡절이 많았지만, 내 힘으로 직접 배포도하고 잘 작동하는 사이트를 보니 내심 뿌듯했습니다.

  







