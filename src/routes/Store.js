import { configureStore, createSlice } from '@reduxjs/toolkit'



let ranking = createSlice({
  name: 'ranking',
  initialState: [
    { id: 1, name: '극한직업', src: "/images/극한직업.jpg", count: 1 },
    { id: 2, name: '기생충', src: "/images/기생충.jpg", count: 1 },
    { id: 3, name: '너의이름은', src: "/images/너의이름은.jpg", count: 1 },
    { id: 4, name: '비긴어게인', src: "/images/비긴어게인.jpg", count: 1 },
    { id: 5, name: '스토브리그', src: "/images/스토브리그.jpg", count: 1 },
  ],
  reducers: {

  }
})




let movie = createSlice({
  name: 'movie',
  initialState: [
    { id: 1, name: '극한직업', src: "/images/극한직업.jpg",  genre: 'korea'},
    { id: 2, name: '기생충', src: "/images/기생충.jpg",  genre: 'korea'},
    
    { id: 3, name: '너의이름은', src: "/images/너의이름은.jpg",  genre:'romance' },
    { id: 4, name: '비긴어게인', src: "/images/비긴어게인.jpg",  genre: 'romance' },
    { id: 5, name: '스토브리그', src: "/images/스토브리그.jpg",  genre: 'korea' },
    { id: 6, name: '브레이킹던', src: "/images/브레이킹던.jpg", genre:'fantasy'},
    { id: 7, name: '미니언즈', src: "/images/미니언즈.jpg",  genre: 'ani'},
    { id: 8, name: '검사외전', src: "/images/검사외전.jpg",  genre: 'korea' },
    { id: 9, name: '트와일라잇', src: "/images/트와일라잇.jpg",  genre: 'action'  },
    { id: 10, name: '컨택트', src: "/images/컨택트.jpg", genre: 'sf'},
    { id: 11, name: '이클립스', src: "/images/이클립스.jpg",  genre: '해외' },
    { id: 12, name: '날씨의아이', src: "/images/날씨의아이.jpg",  genre: 'ani' },
    { id: 13, name: '목소리의형태', src: "/images/목소리의형태.jpg",  genre: 'ani' },
    { id: 14, name: '언어의정원', src: "/images/언어의정원.jpg",  genre: 'ani' },
    { id: 15, name: '시간을달리는소녀', src: "/images/시간을달리는소녀.jpg", genre: 'ani' },
    { id: 16, name: '이누야샤', src: "/images/이누야샤.jpg", genre: 'ani' },
    { id: 17, name: '치킨래빗', src: "/images/치킨래빗.jpg", genre: 'ani' },
    { id: 18, name: '하울의움직이는성', src: "/images/하울의움직이는성.jpg", genre: 'ani' },
    { id: 19, name: '나쁜녀석들', src: "/images/나쁜녀석들.jpg", genre: 'action' },
    { id: 20, name: '치킨래빗', src: "/images/치킨래빗.jpg", genre: 'action' },
    { id: 21, name: '베놈', src: "/images/베놈.jpg", genre: 'action' },
    { id: 22, name: '브레이킹던', src: "/images/브레이킹던.jpg", genre: 'action' },
    { id: 23, name: '블레이드러너', src: "/images/블레이드러너.jpg", genre: 'action' },
    { id: 24, name: '스파이더맨', src: "/images/스파이더맨.jpg", genre: 'action' },
    { id: 25, name: '최종병기활', src: "/images/최종병기활.jpg", genre: 'action' },
    { id: 26, name: '탑건', src: "/images/탑건.jpg", genre: 'action' },
    { id: 27, name: '태양의후예', src: "/images/태양의후예.jpg", genre: 'action' },
    { id: 28, name: '그시절우리가', src: "/images/그시절우리가.jpg", genre: 'romance' },
    { id: 29, name: '미드나잇인파리', src: "/images/미드나잇인파리.jpg", genre: 'romance' },
    { id: 30, name: '사랑의블랙홀', src: "/images/사랑의블랙홀.jpg", genre: 'romance' },
    { id: 31, name: '어바웃타임', src: "/images/어바웃타임.jpg", genre: 'romance' },
    { id: 32, name: '엽기적인그녀', src: "/images/엽기적인그녀.jpg", genre: 'romance' },
    { id: 33, name: '파스타', src: "/images/파스타.jpg", genre: 'romance' },
    { id: 34, name: '파스타', src: "/images/파스타.jpg", genre: 'korea' },
    { id: 35, name: '태양의후예', src: "/images/태양의후예.jpg", genre: 'korea' },
    { id: 36, name: '최종병기활', src: "/images/최종병기활.jpg", genre: 'korea' },
    { id: 37, name: '사일런스', src: "/images/사일런스.jpg", genre: 'sf' },
    { id: 38, name: '설국열차', src: "/images/설국열차.jpg", genre: 'sf' },
    { id: 39, name: '더문', src: "/images/더문.jpg", genre: 'sf' },
    { id: 40, name: '사일런스', src: "/images/사일런스.jpg", genre: 'sf' },
    { id: 41, name: '2012', src: "/images/2012.jpg", genre: 'sf' },
    { id: 42, name: '가타카', src: "/images/가타카.jpg", genre: 'sf' },
    { id: 43, name: '퍼시픽림', src: "/images/퍼시픽림.jpg", genre: 'sf' },
    { id: 44, name: '스타트랙', src: "/images/스타트랙.jpg", genre: 'sf' },
    { id: 45, name: '라라랜드', src: "/images/라라랜드.jpg", genre: 'comedy' },
    { id: 46, name: '리갈하이', src: "/images/리갈하이.jpg", genre: 'comedy' },
    { id: 47, name: '공조2', src: "/images/공조2.jpg", genre: 'comedy' },
    { id: 48, name: '해리', src: "/images/해리.jpg", genre: 'comedy' },
    { id: 49, name: '오피스', src: "/images/오피스.jpg", genre: 'comedy' },
    { id: 50, name: '이프온리', src: "/images/이프온리.jpg", genre: 'comedy' },
    
  ],
  reducers: {
  shuffle(state, action) {
      state.sort(() => Math.random() - 0.5);
    },
  }
})

export default configureStore({
  reducer: {
    ranking: ranking.reducer,
    movie: movie.reducer,
    
  }
})

export let { shuffle } = movie.actions