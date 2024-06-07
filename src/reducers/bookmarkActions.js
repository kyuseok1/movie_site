import {
  ADD_TV_BOOKMARK,
  REMOVE_TV_BOOKMARK,
  ADD_MOVIE_BOOKMARK,
  REMOVE_MOVIE_BOOKMARK,
  SET_BOOKMARKS_FROM_STORAGE,
} from "./actionTypes";

export const addTvBookmark = (id) => ({
  type: ADD_TV_BOOKMARK,
  payload: id,
});

export const removeTvBookmark = (id) => ({
  type: REMOVE_TV_BOOKMARK,
  payload: id,
});

export const addMovieBookmark = (id) => ({
  type: ADD_MOVIE_BOOKMARK,
  payload: id,
});

export const removeMovieBookmark = (id) => ({
  type: REMOVE_MOVIE_BOOKMARK,
  payload: id,
});

export const setBookmarksFromStorage = (bookmarks) => ({
  type: SET_BOOKMARKS_FROM_STORAGE,
  payload: bookmarks,
});
