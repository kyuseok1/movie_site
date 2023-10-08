import { configureStore, createSlice } from '@reduxjs/toolkit'
 
let ranking = createSlice({
  name: 'ranking',
  initialState:[
    { id: 1, name: '극한직업', src: "/images/극한직업.jpg",  count:1},
    { id: 2, name: '기생충', src: "/images/기생충.jpg", count:1},
    { id: 3, name: '너의이름은', src: "/images/너의이름은.jpg", count:1},
    { id: 4, name: '비긴어게인', src: "/images/비긴어게인.jpg", count:1},
    { id: 5, name: '스토브리그', src: "/images/스토브리그.jpg", count:1},
  ],
  reducers:{
      
    
     
  }
})

export default configureStore({
  reducer: {
    ranking : ranking.reducer
  }
}) 