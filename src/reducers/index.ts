import {defaultspecialty, defaultSpecialtyIds} from '../res/data/specialties';
import {defaultDetailing, defaultDetailingIds} from '../res/data/detailing';
import {defaultNews, defaultNewsIds} from '../res/data/news';

import {
  WINDOW_RESIZE,
  SET_PAGE_TITLE
} from '../actions';
import {combineReducers} from 'redux';

const specialties = (state = defaultspecialty, action) => {
  return state;
}
const specialtyIds = (state = defaultSpecialtyIds, action) => {
  return state;
}
const detailing = (state = defaultDetailing, action) => {
  return state;
}
const detailingIds = (state = defaultDetailingIds, action) => {
  return state;
}
const news = (state = defaultNews, action) => {
  return state;
}
const newsIds = (state = defaultNewsIds, action) => {
  return state;
}

const defaultView = {
  screen: {
    width: 500,
    height: 500
  },
  page: {
    title: 'Navy MSC'
  }
}
const view = (state = defaultView, action) => {
  switch (action.type) {
    case WINDOW_RESIZE:
      state = {...state,screen: {...state.screen, width: action.width, height: action.height}};
      break;
    case SET_PAGE_TITLE:
      state = {...state,page: {...state.page, title: action.title}};
      break;
  }
  return state;
}

const reducer = combineReducers({
  specialties,
  specialtyIds,
  detailing,
  detailingIds,
  news,
  newsIds,
  view
});

export default reducer;

