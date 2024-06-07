import {
  ADD_TV_BOOKMARK,
  REMOVE_TV_BOOKMARK,
  ADD_MOVIE_BOOKMARK,
  REMOVE_MOVIE_BOOKMARK,
  SET_BOOKMARKS_FROM_STORAGE,
} from "./actionTypes";

const initialState = {
  tvBookmarks: JSON.parse(localStorage.getItem("tvBookmarks")) || [],
  movieBookmarks: JSON.parse(localStorage.getItem("movieBookmarks")) || [],
};

const bookmarkReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TV_BOOKMARK:
      const updatedTvBookmarks = [...(state.tvBookmarks || []), action.payload];
      localStorage.setItem("tvBookmarks", JSON.stringify(updatedTvBookmarks));
      return {
        ...state,
        tvBookmarks: updatedTvBookmarks,
      };
    case REMOVE_TV_BOOKMARK:
      const filteredTvBookmarks = (state.tvBookmarks || []).filter(
        (item) => item !== action.payload
      );
      localStorage.setItem("tvBookmarks", JSON.stringify(filteredTvBookmarks));
      return {
        ...state,
        tvBookmarks: filteredTvBookmarks,
      };
    case ADD_MOVIE_BOOKMARK:
      const updatedMovieBookmarks = [
        ...(state.movieBookmarks || []),
        action.payload,
      ];
      localStorage.setItem(
        "movieBookmarks",
        JSON.stringify(updatedMovieBookmarks)
      );
      return {
        ...state,
        movieBookmarks: updatedMovieBookmarks,
      };
    case REMOVE_MOVIE_BOOKMARK:
      const filteredMovieBookmarks = (state.movieBookmarks || []).filter(
        (item) => item !== action.payload
      );
      localStorage.setItem(
        "movieBookmarks",
        JSON.stringify(filteredMovieBookmarks)
      );
      return {
        ...state,
        movieBookmarks: filteredMovieBookmarks,
      };
    case SET_BOOKMARKS_FROM_STORAGE:
      return {
        ...state,
        tvBookmarks: action.payload.tvBookmarks || [],
        movieBookmarks: action.payload.movieBookmarks || [],
      };
    default:
      return state;
  }
};

export default bookmarkReducer;
